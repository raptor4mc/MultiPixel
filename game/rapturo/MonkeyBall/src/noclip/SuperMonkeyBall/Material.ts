// Credits to chmcl for initial GMA/TPL support (https://github.com/ch-mcl/)

import { mat4, vec3 } from "gl-matrix";
import { Color, colorCopy, colorMult, colorNewCopy, OpaqueBlack, White } from "../Color.js";
import {
    GfxFormat,
    GfxMipFilterMode,
    GfxSampler,
    GfxTexFilterMode,
    GfxTexture,
    GfxWrapMode,
    makeTextureDescriptor2D,
} from "../gfx/platform/GfxPlatform.js";
import { GfxRenderCache } from "../gfx/render/GfxRenderCache.js";
import { GfxRenderInst } from "../gfx/render/GfxRenderInstManager.js";
import { GXMaterialBuilder } from "../gx/GXMaterialBuilder.js";
import * as GX from "../gx/gx_enum.js";
import { GXMaterialHacks, SwapTable } from "../gx/gx_material.js";
import { ColorKind, DrawParams, GXMaterialHelperGfx, MaterialParams } from "../gx/gx_render.js";
import { transformVec3Mat4w1 } from "../MathHelpers.js";
import { assertExists } from "../util.js";
import * as Gma from "./Gma.js";
import { RenderParams } from "./Model.js";
import { TevLayerInst } from "./TevLayer.js";

const SWAP_TABLES: SwapTable[] = [
    [GX.TevColorChan.R, GX.TevColorChan.G, GX.TevColorChan.B, GX.TevColorChan.A],
    [GX.TevColorChan.R, GX.TevColorChan.G, GX.TevColorChan.B, GX.TevColorChan.R], // Used for alpha textures
    [GX.TevColorChan.R, GX.TevColorChan.G, GX.TevColorChan.B, GX.TevColorChan.G],
    [GX.TevColorChan.R, GX.TevColorChan.G, GX.TevColorChan.B, GX.TevColorChan.B],
];

type BuildState = {
    stage: number;
    texCoord: GX.TexCoordID;
    texMap: GX.TexMapID;
    texGenSrc: GX.TexGenSrc;
};

const WORLD_SPECULAR_TEX_WIDTH = 16;
const WORLD_SPECULAR_TEX_HEIGHT = 4;
let worldSpecularTexture: GfxTexture | null = null;
let worldSpecularSampler: GfxSampler | null = null;

function fillWorldSpecularMapping(renderCache: GfxRenderCache, mapping: MaterialParams["m_TextureMapping"][0]): void {
    if (worldSpecularTexture === null || worldSpecularSampler === null) {
        const device = renderCache.device;
        worldSpecularTexture = device.createTexture(
            makeTextureDescriptor2D(GfxFormat.U8_RGBA_NORM, WORLD_SPECULAR_TEX_WIDTH, WORLD_SPECULAR_TEX_HEIGHT, 1)
        );
        const data = new Uint8Array(WORLD_SPECULAR_TEX_WIDTH * WORLD_SPECULAR_TEX_HEIGHT * 4);
        for (let y = 0; y < WORLD_SPECULAR_TEX_HEIGHT; y++) {
            const value = y < 2 ? 0xff : 0x00;
            for (let x = 0; x < WORLD_SPECULAR_TEX_WIDTH; x++) {
                const idx = (y * WORLD_SPECULAR_TEX_WIDTH + x) * 4;
                data[idx + 0] = value;
                data[idx + 1] = value;
                data[idx + 2] = value;
                data[idx + 3] = 0xff;
            }
        }
        device.uploadTextureData(worldSpecularTexture, 0, [data]);
        worldSpecularSampler = device.createSampler({
            wrapS: GfxWrapMode.Clamp,
            wrapT: GfxWrapMode.Clamp,
            minFilter: GfxTexFilterMode.Bilinear,
            magFilter: GfxTexFilterMode.Bilinear,
            mipFilter: GfxMipFilterMode.Nearest,
            minLOD: 0,
            maxLOD: 0,
        });
    }

    mapping.gfxTexture = worldSpecularTexture;
    mapping.gfxSampler = worldSpecularSampler;
    mapping.width = WORLD_SPECULAR_TEX_WIDTH;
    mapping.height = WORLD_SPECULAR_TEX_HEIGHT;
}

function buildDiffuseLayer(
    mb: GXMaterialBuilder,
    state: BuildState,
    colorIn: GX.CC,
    alphaIn: GX.CA,
    texGenMatrix: GX.TexGenMatrix
) {
    mb.setTevDirect(state.stage);
    mb.setTevSwapMode(state.stage, SWAP_TABLES[0], SWAP_TABLES[0]);
    mb.setTexCoordGen(state.texCoord, GX.TexGenType.MTX2x4, state.texGenSrc, texGenMatrix);
    mb.setTevOrder(state.stage, state.texCoord, state.texMap, GX.RasColorChannelID.COLOR0A0);

    mb.setTevColorIn(state.stage, GX.CC.ZERO, GX.CC.TEXC, colorIn, GX.CC.ZERO);
    mb.setTevColorOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);
    mb.setTevAlphaIn(state.stage, GX.CA.ZERO, GX.CA.TEXA, alphaIn, GX.CA.ZERO);
    mb.setTevAlphaOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);

    state.stage++;
    state.texCoord++;
    state.texMap++;
    state.texGenSrc++;
}

function buildViewSpecularLayer(mb: GXMaterialBuilder, state: BuildState, colorIn: GX.CC, alphaIn: GX.CA) {
    mb.setTevDirect(state.stage);
    mb.setTevSwapMode(state.stage, SWAP_TABLES[0], SWAP_TABLES[0]);
    mb.setTevKColorSel(state.stage, GX.KonstColorSel.KCSEL_K0);
    mb.setTexCoordGen(
        state.texCoord,
        GX.TexGenType.MTX3x4,
        GX.TexGenSrc.NRM,
        GX.TexGenMatrix.TEXMTX0,
        true,
        GX.PostTexGenMatrix.PTTEXMTX0
    );
    mb.setTevOrder(state.stage, state.texCoord, state.texMap, GX.RasColorChannelID.COLOR0A0);

    mb.setTevColorIn(state.stage, GX.CC.ZERO, GX.CC.TEXC, GX.CC.KONST, colorIn);
    mb.setTevColorOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);
    mb.setTevAlphaIn(state.stage, GX.CA.ZERO, GX.CA.ZERO, GX.CA.ZERO, alphaIn);
    mb.setTevAlphaOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);

    state.stage++;
    state.texCoord++;
    state.texMap++;
    state.texGenSrc++;
}

function buildWorldSpecularLayer(mb: GXMaterialBuilder, state: BuildState, colorIn: GX.CC, alphaIn: GX.CA) {
    const stage0 = state.stage;
    const stage1 = state.stage + 1;

    mb.setTevDirect(stage0);
    mb.setTevSwapMode(stage0, SWAP_TABLES[0], SWAP_TABLES[0]);
    mb.setTevKColorSel(stage0, GX.KonstColorSel.KCSEL_K1);
    mb.setTexCoordGen(
        state.texCoord,
        GX.TexGenType.MTX3x4,
        GX.TexGenSrc.NRM,
        GX.TexGenMatrix.TEXMTX0,
        true,
        GX.PostTexGenMatrix.PTTEXMTX2
    );
    mb.setTevOrder(stage0, state.texCoord, GX.TexMapID.TEXMAP0, GX.RasColorChannelID.COLOR0A0);
    mb.setTevColorIn(stage0, GX.CC.ZERO, GX.CC.TEXC, GX.CC.KONST, GX.CC.ZERO);
    mb.setTevColorOp(stage0, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.REG2);
    mb.setTevAlphaIn(stage0, GX.CA.ZERO, GX.CA.ZERO, GX.CA.ZERO, alphaIn);
    mb.setTevAlphaOp(stage0, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.REG2);

    mb.setTevDirect(stage1);
    mb.setTevSwapMode(stage1, SWAP_TABLES[0], SWAP_TABLES[0]);
    mb.setTexCoordGen(
        state.texCoord + 1,
        GX.TexGenType.MTX3x4,
        GX.TexGenSrc.NRM,
        GX.TexGenMatrix.TEXMTX0,
        true,
        GX.PostTexGenMatrix.PTTEXMTX1
    );
    mb.setTevOrder(stage1, state.texCoord + 1, state.texMap, GX.RasColorChannelID.COLOR0A0);
    mb.setTevColorIn(stage1, GX.CC.ZERO, GX.CC.TEXC, GX.CC.C2, colorIn);
    mb.setTevColorOp(stage1, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);
    mb.setTevAlphaIn(stage1, GX.CA.ZERO, GX.CA.ZERO, GX.CA.ZERO, alphaIn);
    mb.setTevAlphaOp(stage1, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);

    state.stage += 2;
    state.texCoord += 2;
    state.texMap += 1;
    state.texGenSrc++;
}

function buildAlphaBlendLayer(
    mb: GXMaterialBuilder,
    state: BuildState,
    colorIn: GX.CC,
    alphaIn: GX.CA,
    texGenMatrix: GX.TexGenMatrix
) {
    mb.setTevDirect(state.stage);
    mb.setTevSwapMode(state.stage, SWAP_TABLES[0], SWAP_TABLES[1]);
    mb.setTexCoordGen(state.texCoord, GX.TexGenType.MTX2x4, state.texGenSrc, texGenMatrix);
    mb.setTevOrder(state.stage, state.texCoord, state.texMap, GX.RasColorChannelID.COLOR0A0);

    mb.setTevColorIn(state.stage, GX.CC.ZERO, GX.CC.ZERO, GX.CC.ZERO, colorIn);
    mb.setTevColorOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);
    mb.setTevAlphaIn(state.stage, GX.CA.ZERO, GX.CA.TEXA, alphaIn, GX.CA.ZERO);
    mb.setTevAlphaOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);

    state.stage++;
    state.texCoord++;
    state.texMap++;
    state.texGenSrc++;
}

function buildDummyPassthroughLayer(mb: GXMaterialBuilder, state: BuildState, colorIn: GX.CC, alphaIn: GX.CA) {
    mb.setTevDirect(state.stage);
    mb.setTevOrder(state.stage, GX.TexCoordID.TEXCOORD_NULL, GX.TexMapID.TEXMAP_NULL, GX.RasColorChannelID.COLOR0A0);
    mb.setTevColorIn(state.stage, GX.CC.ZERO, GX.CC.ZERO, GX.CC.ZERO, colorIn);
    mb.setTevColorOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);
    mb.setTevAlphaIn(state.stage, GX.CA.ZERO, GX.CA.ZERO, GX.CA.ZERO, alphaIn);
    mb.setTevAlphaOp(state.stage, GX.TevOp.ADD, GX.TevBias.ZERO, GX.TevScale.SCALE_1, true, GX.Register.PREV);

    state.stage++;
}

const scratchMaterialParams = new MaterialParams();
const scratchColor1: Color = colorNewCopy(White);
const scratchColor2: Color = colorNewCopy(White);
const scratchColor3: Color = colorNewCopy(White);
const scratchVec3a = vec3.create();
const scratchVec3b = vec3.create();
const scratchVec3c = vec3.create();
const scratchVec3d = vec3.create();
const scratchVec3e = vec3.create();
const scratchMat4a = mat4.create();
const vec3Zero = vec3.fromValues(0, 0, 0);
const vec3Up = vec3.fromValues(0, 1, 0);

function mat4GetElem(m: mat4, row: number, col: number): number {
    return m[col * 4 + row];
}

function mat4SetElem(m: mat4, row: number, col: number, value: number): void {
    m[col * 4 + row] = value;
}

function scaleMat4x3(m: mat4, scale: number): void {
    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
            m[col * 4 + row] *= scale;
        }
    }
}

function applySpecularPostTransform(dst: mat4, src: mat4): void {
    mat4.copy(dst, src);
    mat4SetElem(dst, 0, 3, 0.5);
    mat4SetElem(dst, 1, 0, -mat4GetElem(dst, 1, 0));
    mat4SetElem(dst, 1, 1, -mat4GetElem(dst, 1, 1));
    mat4SetElem(dst, 1, 2, -mat4GetElem(dst, 1, 2));
    mat4SetElem(dst, 1, 3, 0.5);
    mat4SetElem(dst, 2, 0, 0.0);
    mat4SetElem(dst, 2, 1, 0.0);
    mat4SetElem(dst, 2, 2, 0.0);
    mat4SetElem(dst, 2, 3, 1.0);
    scaleMat4x3(dst, 0.5);
}

function computeViewSpecularPostTexMtx(dst: mat4, modelDirView: vec3): void {
    mat4.lookAt(dst, vec3Zero, modelDirView, vec3Up);
    applySpecularPostTransform(dst, dst);
}

function computeWorldSpecularPostTexMtx(dst1: mat4, dst2: mat4, modelDirView: vec3, lightDirView: vec3): void {
    const target = scratchVec3c;
    const scaledModelDir = scratchVec3d;
    const up = scratchVec3e;

    vec3.scale(scaledModelDir, modelDirView, -0.9);
    vec3.add(target, lightDirView, scaledModelDir);
    vec3.scale(target, target, 0.5);
    vec3.sub(up, target, scaledModelDir);

    mat4.lookAt(scratchMat4a, vec3Zero, target, up);
    applySpecularPostTransform(dst1, scratchMat4a);

    mat4.identity(dst2);
    mat4SetElem(dst2, 0, 0, 0.0);
    mat4SetElem(dst2, 0, 2, 0.5);
    mat4SetElem(dst2, 0, 3, 0.5);
    mat4SetElem(dst2, 1, 1, 0.0);
    mat4SetElem(dst2, 2, 2, 0.0);
    mat4SetElem(dst2, 2, 3, 1.0);
    mat4.mul(dst2, dst2, scratchMat4a);
}

export class MaterialInst {
    private tevLayers: TevLayerInst[];
    private materialHelper: GXMaterialHelperGfx;
    private textureSlots: (TevLayerInst | "worldSpecular")[];
    private hasViewSpecular = false;
    private hasWorldSpecular = false;

    constructor(
        private materialData: Gma.Material,
        modelTevLayers: TevLayerInst[],
        private translucentShape: boolean,
        private cullMode: GX.CullMode,
        private modelBoundCenter: vec3,
        private modelBoundRadius: number
    ) {
        this.tevLayers = [];
        this.textureSlots = [];

        for (let i = 0; i < materialData.tevLayerCount; i++) {
            const tevLayerIdx = materialData.tevLayerIdxs[i];
            const tevLayer = modelTevLayers[tevLayerIdx];
            const flags = tevLayer.tevLayerData.flags;
            this.tevLayers.push(tevLayer);
            if (flags & Gma.TevLayerFlags.TypeViewSpecular) this.hasViewSpecular = true;
            if (flags & Gma.TevLayerFlags.TypeWorldSpecular) {
                this.hasWorldSpecular = true;
            }
            this.textureSlots.push(tevLayer);
        }

        this.genGXMaterial();
    }

    private genGXMaterial(): void {
        const mb = new GXMaterialBuilder();

        mb.setCullMode(this.cullMode);

        // Set up lighting channel
        let colorIn: GX.CC = GX.CC.RASC;
        let alphaIn: GX.CA = GX.CA.RASA;
        if (this.materialData.flags & Gma.MaterialFlags.Unlit) {
            if (this.materialData.flags & Gma.MaterialFlags.VertColors) {
                mb.setChanCtrl(
                    GX.ColorChannelID.COLOR0A0,
                    false,
                    GX.ColorSrc.VTX, // Ambient src, no-op. With light channel disabled there is no ambient light
                    GX.ColorSrc.VTX, // Material source
                    0,
                    GX.DiffuseFunction.NONE,
                    GX.AttenuationFunction.NONE
                );
            } else {
                colorIn = GX.CC.C0;
                alphaIn = GX.CA.A0;
            }
        } else {
            if (this.materialData.flags & Gma.MaterialFlags.VertColors) {
                mb.setChanCtrl(
                    GX.ColorChannelID.ALPHA0, // chan
                    false, // enable
                    GX.ColorSrc.REG, // amb_src
                    GX.ColorSrc.VTX, // mat_src
                    0, // light_mask
                    GX.DiffuseFunction.NONE, // diff_fn
                    GX.AttenuationFunction.NONE // attn_fn
                ); // attn_fn
                // Enable alpha channel
                mb.setChanCtrl(
                    GX.ColorChannelID.COLOR0, // chan
                    true, // enable
                    GX.ColorSrc.REG, // amb_src
                    GX.ColorSrc.VTX, // mat_src
                    1, // light_mask, assuming we only have on directional light for now
                    GX.DiffuseFunction.CLAMP, // diff_fn
                    GX.AttenuationFunction.SPOT // attn_fn
                );
            } else {
                mb.setChanCtrl(
                    GX.ColorChannelID.ALPHA0, // chan
                    false, // enable
                    GX.ColorSrc.REG, // amb_src
                    GX.ColorSrc.REG, // mat_src
                    0, // light_mask
                    GX.DiffuseFunction.NONE, // diff_fn
                    GX.AttenuationFunction.NONE // attn_fn
                ); // attn_fn
                // Enable alpha channel
                mb.setChanCtrl(
                    GX.ColorChannelID.COLOR0, // chan
                    true, // enable
                    GX.ColorSrc.REG, // amb_src
                    GX.ColorSrc.REG, // mat_src
                    1, // light_mask, assuming we only have on directional light for now
                    GX.DiffuseFunction.CLAMP, // diff_fn
                    GX.AttenuationFunction.SPOT // attn_fn
                );
            }
        }

        const buildState: BuildState = {
            stage: 0,
            texCoord: GX.TexCoordID.TEXCOORD0,
            texMap: this.hasWorldSpecular ? GX.TexMapID.TEXMAP1 : GX.TexMapID.TEXMAP0,
            texGenSrc: GX.TexGenSrc.TEX0,
        };

        if (this.materialData.flags & Gma.MaterialFlags.SimpleMaterial) {
            mb.setTevOrder(
                buildState.stage,
                GX.TexCoordID.TEXCOORD_NULL,
                GX.TexMapID.TEXMAP_NULL,
                GX.RasColorChannelID.COLOR0A0
            );
            mb.setTevColorIn(buildState.stage, GX.CC.ZERO, GX.CC.ZERO, GX.CC.ZERO, colorIn);
            mb.setTevColorOp(
                buildState.stage,
                GX.TevOp.ADD,
                GX.TevBias.ZERO,
                GX.TevScale.SCALE_1,
                true,
                GX.Register.PREV
            );
            mb.setTevAlphaIn(buildState.stage, GX.CA.ZERO, GX.CA.ZERO, GX.CA.ZERO, alphaIn);
            mb.setTevAlphaOp(
                buildState.stage,
                GX.TevOp.ADD,
                GX.TevBias.ZERO,
                GX.TevScale.SCALE_1,
                true,
                GX.Register.PREV
            );
            buildState.stage++;
        } else {
            for (let layerIdx = 0; layerIdx < this.tevLayers.length; layerIdx++) {
                const layer = this.tevLayers[layerIdx];
                const texGenMatrix =
                    layer.tevLayerData.flags & Gma.TevLayerFlags.EnableUvScroll
                        ? GX.TexGenMatrix.TEXMTX1
                        : GX.TexGenMatrix.TEXMTX2;
                const layerTypeFlags =
                    layer.tevLayerData.flags &
                    (Gma.TevLayerFlags.TypeAlphaBlend |
                        Gma.TevLayerFlags.TypeViewSpecular |
                        Gma.TevLayerFlags.TypeWorldSpecular);
                if (layerTypeFlags === 0) {
                    buildDiffuseLayer(mb, buildState, colorIn, alphaIn, texGenMatrix);
                } else if (layerTypeFlags & Gma.TevLayerFlags.TypeAlphaBlend) {
                    buildAlphaBlendLayer(mb, buildState, colorIn, alphaIn, texGenMatrix);
                } else if (layerTypeFlags & Gma.TevLayerFlags.TypeViewSpecular) {
                    buildViewSpecularLayer(mb, buildState, colorIn, alphaIn);
                } else if (layerTypeFlags & Gma.TevLayerFlags.TypeWorldSpecular) {
                    buildWorldSpecularLayer(mb, buildState, colorIn, alphaIn);
                } else {
                    // TODO(complexplane): The other kinds of layers
                    buildDummyPassthroughLayer(mb, buildState, colorIn, alphaIn);
                }

                colorIn = GX.CC.CPREV;
                alphaIn = GX.CA.APREV;
            }
        }

        mb.setAlphaCompare(GX.CompareType.GREATER, 0, GX.AlphaOp.AND, GX.CompareType.GREATER, 0);

        let srcBlendFactor = GX.BlendFactor.SRCALPHA;
        if (this.materialData.flags & Gma.MaterialFlags.CustomBlendSrc) {
            srcBlendFactor = this.materialData.blendFactors & 0xf;
        }
        let destBlendFactor = GX.BlendFactor.INVSRCALPHA;
        if (this.materialData.flags & Gma.MaterialFlags.CustomBlendDest) {
            destBlendFactor = (this.materialData.blendFactors >> 4) & 0xf;
        }
        mb.setBlendMode(GX.BlendMode.BLEND, srcBlendFactor, destBlendFactor, GX.LogicOp.CLEAR);

        mb.setZMode(true, GX.CompareType.LEQUAL, true);

        this.materialHelper = new GXMaterialHelperGfx(mb.finish());
    }

    public setMaterialHacks(hacks: GXMaterialHacks): void {
        this.materialHelper.setMaterialHacks(hacks);
    }

    public prewarmProgram(renderCache: GfxRenderCache): void {
        this.materialHelper.cacheProgram(renderCache);
    }

    public setOnRenderInst(
        renderCache: GfxRenderCache,
        inst: GfxRenderInst,
        drawParams: DrawParams,
        renderParams: RenderParams
    ): void {
        // Shader program
        this.materialHelper.setOnRenderInst(renderCache, inst);

        // Sampler bindings
        const materialParams = scratchMaterialParams;
        materialParams.clear();
        if (this.hasWorldSpecular) {
            fillWorldSpecularMapping(renderCache, materialParams.m_TextureMapping[0]);
        }
        const texSlotOffset = this.hasWorldSpecular ? 1 : 0;
        for (let i = 0; i < this.textureSlots.length; i++) {
            const slot = this.textureSlots[i];
            slot.fillTextureMapping(materialParams.m_TextureMapping[i + texSlotOffset]);
        }
        const overrideTexture = renderParams.textureOverride;
        if (overrideTexture && overrideTexture.gfxTexture && overrideTexture.gfxSampler) {
            materialParams.m_TextureMapping[texSlotOffset].copy(overrideTexture);
        }

        const lighting = assertExists(renderParams.lighting);

        // Ambient lighting color. Alpha should be irrelevant since alpha light channel is
        // always disabled
        const ambientColor = scratchColor2;
        if (this.materialData.flags & Gma.MaterialFlags.CustomMatAmbColors) {
            colorMult(ambientColor, this.materialData.ambientColor, lighting.ambientColor);
        } else {
            colorCopy(ambientColor, lighting.ambientColor);
        }

        // Material color
        const materialColor = scratchColor1;
        if (this.materialData.flags & (Gma.MaterialFlags.CustomMatAmbColors | Gma.MaterialFlags.SimpleMaterial)) {
            colorCopy(materialColor, this.materialData.materialColor);
        } else {
            colorCopy(materialColor, White);
        }
        materialColor.a = this.materialData.alpha * renderParams.alpha;

        const colorMul = renderParams.colorMul;
        materialColor.r *= colorMul.r;
        materialColor.g *= colorMul.g;
        materialColor.b *= colorMul.b;
        materialColor.a *= colorMul.a;

        mat4.copy(materialParams.u_TexMtx[1], renderParams.texMtx);
        mat4.identity(materialParams.u_TexMtx[2]);

        ambientColor.r *= colorMul.r;
        ambientColor.g *= colorMul.g;
        ambientColor.b *= colorMul.b;
        ambientColor.a *= colorMul.a;

        colorCopy(materialParams.u_Color[ColorKind.MAT0], materialColor);
        colorCopy(materialParams.u_Color[ColorKind.AMB0], ambientColor);
        // Game uses TEVREG0 instead of RASC when lighting and vertex colors are disabled
        colorCopy(materialParams.u_Color[ColorKind.C0], materialColor);

        materialParams.u_Lights[0].copy(lighting.infLightViewSpace);

        const allowSpecular = !renderParams.disableSpecular;
        if (this.hasViewSpecular || this.hasWorldSpecular) {
            transformVec3Mat4w1(scratchVec3a, renderParams.viewFromModel, this.modelBoundCenter);
            scratchVec3a[2] -= this.modelBoundRadius;
            vec3.normalize(scratchVec3a, scratchVec3a);

            mat4.copy(materialParams.u_TexMtx[0], renderParams.viewFromModel);
            materialParams.u_TexMtx[0][12] = 0.0;
            materialParams.u_TexMtx[0][13] = 0.0;
            materialParams.u_TexMtx[0][14] = 0.0;

            if (this.hasViewSpecular) {
                computeViewSpecularPostTexMtx(materialParams.u_PostTexMtx[0], scratchVec3a);
            }

            if (this.hasWorldSpecular) {
                vec3.normalize(scratchVec3b, lighting.infLightViewSpace.Position);
                computeWorldSpecularPostTexMtx(
                    materialParams.u_PostTexMtx[1],
                    materialParams.u_PostTexMtx[2],
                    scratchVec3a,
                    scratchVec3b
                );
            }

            if (allowSpecular) {
                colorCopy(scratchColor3, this.materialData.specularColor);
                if (scratchColor3.r === 0 && scratchColor3.g === 0 && scratchColor3.b === 0) {
                    colorCopy(scratchColor3, White);
                }
                scratchColor3.a = 1;
                if (this.hasViewSpecular) {
                    colorCopy(materialParams.u_Color[ColorKind.K0], scratchColor3);
                }
                if (this.hasWorldSpecular) {
                    scratchColor3.r *= lighting.specularColorScale.r;
                    scratchColor3.g *= lighting.specularColorScale.g;
                    scratchColor3.b *= lighting.specularColorScale.b;
                    colorCopy(materialParams.u_Color[ColorKind.K1], scratchColor3);
                }
            } else {
                // Hack: allow callers to disable specular even if TEV layers include it.
                if (this.hasViewSpecular) {
                    colorCopy(materialParams.u_Color[ColorKind.K0], OpaqueBlack);
                }
                if (this.hasWorldSpecular) {
                    colorCopy(materialParams.u_Color[ColorKind.K1], OpaqueBlack);
                }
            }
        }

        this.materialHelper.allocateMaterialParamsDataOnInst(inst, materialParams);
        inst.setSamplerBindingsFromTextureMappings(materialParams.m_TextureMapping);

        // Draw params
        this.materialHelper.allocateDrawParamsDataOnInst(inst, drawParams);
    }
}
