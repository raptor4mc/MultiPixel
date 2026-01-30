export interface ViewerRenderInput {
  camera: any;
  time: number;
  deltaTime: number;
  backbufferWidth: number;
  backbufferHeight: number;
  onscreenTexture: any;
  antialiasingMode: number;
  mouseLocation: { mouseX: number; mouseY: number };
  debugConsole: { addInfoLine: (line: string) => void };
}

export interface Texture {
  name: string;
  surfaces: HTMLCanvasElement[];
  activate?: () => Promise<void> | void;
  extraInfo?: Map<string, string> | null;
}
