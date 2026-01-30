import type { GfxDevice } from './gfx/platform/GfxPlatform.js';

export interface SceneContext {
  device: GfxDevice;
  dataFetcher?: unknown;
  dataShare?: unknown;
}

export interface Destroyable {
  destroy(device: GfxDevice): void;
}
