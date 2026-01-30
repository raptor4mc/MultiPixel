export interface TextureListHolder {
  onnewtextures: (() => void) | null;
  readonly textureNames: string[];
  getViewerTexture(i: number): Promise<unknown> | unknown;
}
