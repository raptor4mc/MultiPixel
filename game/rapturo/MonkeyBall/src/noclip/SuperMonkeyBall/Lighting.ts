import { vec3 } from "gl-matrix";
import { Color, colorCopy, colorNewCopy, colorNewFromRGBA } from "../Color.js";
import { SpotFunction } from "../gx/gx_enum.js";
import * as GX_Material from "../gx/gx_material.js";
import { transformVec3Mat4w0, Vec3Zero } from "../MathHelpers.js";
import * as Viewer from "../viewer.js";
import { BgInfo } from "./StageInfo.js";
import { S16_TO_RADIANS } from "./Utils.js";

export class Lighting {
    public ambientColor: Color;
    public infLightViewSpace: GX_Material.Light;
    public specularColorScale: Color;
    public readonly bgInfo: BgInfo;

    private infLightWorldSpace: GX_Material.Light;

    constructor(bgInfo: BgInfo, specularColorScale: Color | null = null) {
        this.bgInfo = bgInfo;
        this.ambientColor = colorNewCopy(bgInfo.ambientColor);

        this.infLightWorldSpace = new GX_Material.Light();
        this.infLightViewSpace = new GX_Material.Light();
        this.specularColorScale = colorNewCopy(specularColorScale ?? bgInfo.infLightColor);

        colorCopy(this.infLightWorldSpace.Color, bgInfo.infLightColor);

        vec3.set(this.infLightWorldSpace.Position, 0, 0, -1);
        vec3.rotateX(
            this.infLightWorldSpace.Position,
            this.infLightWorldSpace.Position,
            Vec3Zero,
            S16_TO_RADIANS * bgInfo.infLightRotX
        );
        vec3.rotateY(
            this.infLightWorldSpace.Position,
            this.infLightWorldSpace.Position,
            Vec3Zero,
            S16_TO_RADIANS * bgInfo.infLightRotY
        );
        // Move point light far away to emulate directional light
        vec3.scale(this.infLightWorldSpace.Position, this.infLightWorldSpace.Position, 10000);

        GX_Material.lightSetSpot(this.infLightWorldSpace, 0, SpotFunction.OFF);

        this.infLightViewSpace.copy(this.infLightWorldSpace);
    }

    public update(viewerInput: Viewer.ViewerRenderInput) {
        transformVec3Mat4w0(
            this.infLightViewSpace.Position,
            viewerInput.camera.viewMatrix,
            this.infLightWorldSpace.Position
        );
    }
}

export class LightingGroups {
    private groupCache = new Map<number, Lighting>();

    constructor(public readonly base: Lighting) {}

    public update(viewerInput: Viewer.ViewerRenderInput): void {
        this.base.update(viewerInput);
        for (const lighting of this.groupCache.values()) {
            lighting.update(viewerInput);
        }
    }

    public getForBgFlags(flags: number): Lighting {
        const customGroup = flags >>> 28;
        if (customGroup <= 0) {
            return this.base;
        }
        const cached = this.groupCache.get(customGroup);
        if (cached) {
            return cached;
        }
        // BG light groups are typically local point/spot lights; disable specular scale by default.
        const lighting = new Lighting(this.base.bgInfo, colorNewFromRGBA(0, 0, 0));
        this.groupCache.set(customGroup, lighting);
        return lighting;
    }
}
