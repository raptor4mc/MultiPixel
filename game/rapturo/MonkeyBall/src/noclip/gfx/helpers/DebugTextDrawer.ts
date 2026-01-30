export class DebugTextDrawer {}

export async function makeDebugTextDrawer(): Promise<DebugTextDrawer> {
  return new DebugTextDrawer();
}
