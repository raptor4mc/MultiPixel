import type { GfxRenderCache } from '../render/GfxRenderCache.js';
import type { GfxRenderDynamicUniformBuffer } from '../render/GfxRenderDynamicUniformBuffer.js';

export class DebugDraw {
  constructor(_renderCache: GfxRenderCache, _uniformBuffer: GfxRenderDynamicUniformBuffer) {}

  public destroy(): void {}
}
