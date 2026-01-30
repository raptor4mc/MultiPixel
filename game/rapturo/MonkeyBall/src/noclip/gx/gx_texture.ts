
// GX texture decoding

import ArrayBufferSlice from '../ArrayBufferSlice.js';

import * as GX from './gx_enum.js';
import { align, assertExists } from '../util.js';

export interface TextureInputGX {
    name: string;
    format: GX.TexFormat;
    width: number;
    height: number;
    data: ArrayBufferSlice | null;
    mipCount: number;
    paletteFormat?: GX.TexPalette | null;
    paletteData?: ArrayBufferSlice | null;
}

export interface DecodedTexture {
    pixels: ArrayBufferView;
}

export function calcPaletteSize(format: GX.TexFormat, palette: GX.TexPalette) {
    let paletteSize = 0;

    switch (format) {
    case GX.TexFormat.C4:
        paletteSize = 16;
        break;
    case GX.TexFormat.C8:
        paletteSize = 256;
        break;
    case GX.TexFormat.C14X2:
        paletteSize = 16384;
        break;
    default:
        throw new Error("whoops");
    }

    // All palette-formats are 16-bit.
    return paletteSize * 2;
}

const texBlockInfo = {
    [GX.TexFormat.I4]:     { blockWidth: 8, blockHeight: 8, bytesPerPixelShift: 1, },
    [GX.TexFormat.I8]:     { blockWidth: 8, blockHeight: 4, bytesPerPixelShift: 0, },
    [GX.TexFormat.IA4]:    { blockWidth: 8, blockHeight: 4, bytesPerPixelShift: 0, },
    [GX.TexFormat.IA8]:    { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1, },
    [GX.TexFormat.RGB565]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1, },
    [GX.TexFormat.RGB5A3]: { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1, },
    [GX.TexFormat.RGBA8]:  { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -2, },
    [GX.TexFormat.C4]:     { blockWidth: 8, blockHeight: 8, bytesPerPixelShift: 1, },
    [GX.TexFormat.C8]:     { blockWidth: 8, blockHeight: 4, bytesPerPixelShift: 0, },
    [GX.TexFormat.C14X2]:  { blockWidth: 4, blockHeight: 4, bytesPerPixelShift: -1, },
    [GX.TexFormat.CMPR]:   { blockWidth: 8, blockHeight: 8, bytesPerPixelShift: 1, },
};

export function calcTextureSize(format: GX.TexFormat, width: number, height: number) {
    const blockInfo = texBlockInfo[format];
    const numPixels = align(width, blockInfo.blockWidth) * align(height, blockInfo.blockHeight);
    if (blockInfo.bytesPerPixelShift > 0)
        return numPixels >>> blockInfo.bytesPerPixelShift;
    else
        return numPixels << -blockInfo.bytesPerPixelShift;
}

export interface MipChain {
    name: string;
    mipLevels: TextureInputGX[];
    fullTextureSize: number;
}

export function calcMipChain(texture: TextureInputGX, mipCount: number = texture.mipCount): MipChain {
    const mipLevels: TextureInputGX[] = [];
    const name = texture.name;

    let mipOffs = 0;
    let mipLevel = 0;
    const format = texture.format;
    let width = texture.width;
    let height = texture.height;

    while (mipLevel < mipCount) {
        const data = texture.data !== null ? texture.data.subarray(mipOffs) : null;
        const paletteFormat = texture.paletteFormat;
        const paletteData = texture.paletteData;

        const mipSize = calcTextureSize(format, width, height);

        // Retro Studios has a buggy mipmap encoder that does not handle tall texture
        // padding correctly. A 32x64 texture will contain a mip level sized 4x8 and
        // only emit one block rather than two padded ones. In this case we simply discard
        // the partial mip level.
        if (data && mipSize > data.byteLength)
            break;

        mipLevels.push({ name: `${texture.name} mip level ${mipLevel}`, format, width, height, data, paletteFormat, paletteData, mipCount: 1 });
        mipLevel++;
        // Mipmap levels are aligned to 32B.
        mipOffs += Math.max(mipSize, 32);
        width /= 2;
        height /= 2;
    }

    return { name, mipLevels, fullTextureSize: mipOffs };
}

function decode_Dummy(texture: TextureInputGX): DecodedTexture {
    const pixels = new Uint8Array(texture.width * texture.height * 4);
    pixels.fill(0xFF);
    return { pixels };
}

function getPaletteFormatName(paletteFormat: GX.TexPalette | undefined | null): string {
    return GX.TexPalette[assertExists(paletteFormat)];
}

export function getFormatName(format: GX.TexFormat, paletteFormat?: GX.TexPalette | null): string {
    switch (format) {
    case GX.TexFormat.I4:
    case GX.TexFormat.I8:
    case GX.TexFormat.IA4:
    case GX.TexFormat.IA8:
    case GX.TexFormat.RGB565:
    case GX.TexFormat.RGB5A3:
    case GX.TexFormat.RGBA8:
    case GX.TexFormat.CMPR:
        return GX.TexFormat[format];
    case GX.TexFormat.C4:
        return `C4 (${getPaletteFormatName(paletteFormat)})`;
    case GX.TexFormat.C8:
        return `C8 (${getPaletteFormatName(paletteFormat)})`;
    case GX.TexFormat.C14X2:
        return `C14X2 (${getPaletteFormatName(paletteFormat)})`;
    default:
        return "invalid";
    }
}

function decodeRGB565(value: number): [number, number, number, number] {
    const r = ((value >> 11) & 0x1f) * 255 / 31;
    const g = ((value >> 5) & 0x3f) * 255 / 63;
    const b = (value & 0x1f) * 255 / 31;
    return [r, g, b, 255];
}

function decodeRGB5A3(value: number): [number, number, number, number] {
    if (value & 0x8000) {
        const r = ((value >> 10) & 0x1f) * 255 / 31;
        const g = ((value >> 5) & 0x1f) * 255 / 31;
        const b = (value & 0x1f) * 255 / 31;
        return [r, g, b, 255];
    }
    const a = ((value >> 12) & 0x7) * 255 / 7;
    const r = ((value >> 8) & 0xf) * 255 / 15;
    const g = ((value >> 4) & 0xf) * 255 / 15;
    const b = (value & 0xf) * 255 / 15;
    return [r, g, b, a];
}

function decodeCmprBlock(dst: Uint8Array, dstIndex: number, stride: number, src: Uint8Array, srcIndex: number): void {
    const c1 = (src[srcIndex] << 8) | src[srcIndex + 1];
    const c2 = (src[srcIndex + 2] << 8) | src[srcIndex + 3];
    const [r1, g1, b1] = decodeRGB565(c1);
    const [r2, g2, b2] = decodeRGB565(c2);
    const colors: [number, number, number, number][] = new Array(4) as any;
    colors[0] = [r1, g1, b1, 255];
    colors[1] = [r2, g2, b2, 255];

    if (c1 > c2) {
        colors[2] = [(2 * r1 + r2) / 3, (2 * g1 + g2) / 3, (2 * b1 + b2) / 3, 255];
        colors[3] = [(r1 + 2 * r2) / 3, (g1 + 2 * g2) / 3, (b1 + 2 * b2) / 3, 255];
    } else {
        colors[2] = [(r1 + r2) / 2, (g1 + g2) / 2, (b1 + b2) / 2, 255];
        colors[3] = [r2, g2, b2, 0];
    }

    let bitIndex = srcIndex + 4;
    for (let y = 0; y < 4; y++) {
        let val = src[bitIndex++];
        for (let x = 0; x < 4; x++) {
            const idx = (val >> 6) & 0x03;
            val = (val << 2) & 0xff;
            const color = colors[idx];
            const out = dstIndex + y * stride + x * 4;
            dst[out] = color[0];
            dst[out + 1] = color[1];
            dst[out + 2] = color[2];
            dst[out + 3] = color[3];
        }
    }
}

function decodeTileI4(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let srcIndex = srcPos;
    let dstIndex = dstPos;
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const byte = src[srcIndex];
            const value = (x & 1) === 0 ? (byte >> 4) : (byte & 0x0f);
            const intensity = (value << 4) | value;
            dst[dstIndex] = intensity;
            dst[dstIndex + 1] = intensity;
            dst[dstIndex + 2] = intensity;
            dst[dstIndex + 3] = 255;
            dstIndex += 4;
            if (x & 1) {
                srcIndex += 1;
            }
        }
        dstIndex += stride - 8 * 4;
    }
}

function decodeTileI8(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let srcIndex = srcPos;
    let dstIndex = dstPos;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 8; x++) {
            const intensity = src[srcIndex++];
            dst[dstIndex] = intensity;
            dst[dstIndex + 1] = intensity;
            dst[dstIndex + 2] = intensity;
            dst[dstIndex + 3] = 255;
            dstIndex += 4;
        }
        dstIndex += stride - 8 * 4;
    }
}

function decodeTileIA4(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let srcIndex = srcPos;
    let dstIndex = dstPos;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 8; x++) {
            const byte = src[srcIndex++];
            const intensity = (byte & 0x0f) * 17;
            const alpha = (byte >> 4) * 17;
            dst[dstIndex] = intensity;
            dst[dstIndex + 1] = intensity;
            dst[dstIndex + 2] = intensity;
            dst[dstIndex + 3] = alpha;
            dstIndex += 4;
        }
        dstIndex += stride - 8 * 4;
    }
}

function decodeTileIA8(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let srcIndex = srcPos;
    let dstIndex = dstPos;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const intensity = src[srcIndex++];
            const alpha = src[srcIndex++];
            dst[dstIndex] = intensity;
            dst[dstIndex + 1] = intensity;
            dst[dstIndex + 2] = intensity;
            dst[dstIndex + 3] = alpha;
            dstIndex += 4;
        }
        dstIndex += stride - 4 * 4;
    }
}

function decodeTileRGB565(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let srcIndex = srcPos;
    let dstIndex = dstPos;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const value = (src[srcIndex] << 8) | src[srcIndex + 1];
            srcIndex += 2;
            const [r, g, b, a] = decodeRGB565(value);
            dst[dstIndex] = r;
            dst[dstIndex + 1] = g;
            dst[dstIndex + 2] = b;
            dst[dstIndex + 3] = a;
            dstIndex += 4;
        }
        dstIndex += stride - 4 * 4;
    }
}

function decodeTileRGB5A3(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let srcIndex = srcPos;
    let dstIndex = dstPos;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const value = (src[srcIndex] << 8) | src[srcIndex + 1];
            srcIndex += 2;
            const [r, g, b, a] = decodeRGB5A3(value);
            dst[dstIndex] = r;
            dst[dstIndex + 1] = g;
            dst[dstIndex + 2] = b;
            dst[dstIndex + 3] = a;
            dstIndex += 4;
        }
        dstIndex += stride - 4 * 4;
    }
}

function decodeTileRGBA8(dst: Uint8Array, dstPos: number, stride: number, src: Uint8Array, srcPos: number): void {
    let dstIndex = dstPos;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const srcMv = srcPos + y * 8 + x * 2;
            const a = src[srcMv];
            const r = src[srcMv + 1];
            const g = src[srcMv + 32];
            const b = src[srcMv + 33];
            dst[dstIndex] = r;
            dst[dstIndex + 1] = g;
            dst[dstIndex + 2] = b;
            dst[dstIndex + 3] = a;
            dstIndex += 4;
        }
        dstIndex += stride - 4 * 4;
    }
}

function decodeTextureToRGBA8(texture: TextureInputGX): Uint8Array {
    if (texture.paletteFormat !== null && texture.paletteFormat !== undefined) {
        throw new Error('Palette textures are not supported in this build.');
    }
    const src = texture.data!.createTypedArray(Uint8Array, 0, calcTextureSize(texture.format, texture.width, texture.height));
    const dst = new Uint8Array(texture.width * texture.height * 4);
    const stride = texture.width * 4;

    const blockInfo = texBlockInfo[texture.format];
    for (let y = 0; y < texture.height; y += blockInfo.blockHeight) {
        for (let x = 0; x < texture.width; x += blockInfo.blockWidth) {
            const srcPos = calcTextureOffset(texture.format, texture.width, x, y);
            const dstPos = (y * texture.width + x) * 4;
            switch (texture.format) {
            case GX.TexFormat.I4:
                decodeTileI4(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.I8:
                decodeTileI8(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.IA4:
                decodeTileIA4(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.IA8:
                decodeTileIA8(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.RGB565:
                decodeTileRGB565(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.RGB5A3:
                decodeTileRGB5A3(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.RGBA8:
                decodeTileRGBA8(dst, dstPos, stride, src, srcPos);
                break;
            case GX.TexFormat.CMPR:
                decodeCmprBlock(dst, dstPos, stride, src, srcPos);
                decodeCmprBlock(dst, dstPos + 16, stride, src, srcPos + 8);
                decodeCmprBlock(dst, dstPos + stride * 4, stride, src, srcPos + 16);
                decodeCmprBlock(dst, dstPos + stride * 4 + 16, stride, src, srcPos + 24);
                break;
            default:
                throw new Error(`Unsupported texture format ${GX.TexFormat[texture.format]}`);
            }
        }
    }
    return dst;
}

function calcTextureOffset(format: GX.TexFormat, width: number, x: number, y: number): number {
    const blockInfo = texBlockInfo[format];
    const bytesPerBlock = calcTextureSize(format, blockInfo.blockWidth, blockInfo.blockHeight);
    const blocksPerRow = align(width, blockInfo.blockWidth) / blockInfo.blockWidth;
    const blockX = x / blockInfo.blockWidth;
    const blockY = y / blockInfo.blockHeight;
    return (blockY * blocksPerRow + blockX) * bytesPerBlock;
}

export async function decodeTexture(texture: TextureInputGX): Promise<DecodedTexture> {
    if (texture.data === null)
        return decode_Dummy(texture);

    const pixels = decodeTextureToRGBA8(texture);
    return { pixels };
}
