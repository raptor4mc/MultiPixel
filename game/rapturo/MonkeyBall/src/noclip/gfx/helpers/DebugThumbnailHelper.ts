import type { GfxRenderHelper } from '../render/GfxRenderHelper.js';

export interface TextDrawer {}

export class DebugThumbnailDrawer {
  constructor(_helper: GfxRenderHelper) {}

  public destroy(): void {}
}
