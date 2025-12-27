export async function loadWasm() {
  const wasm = await fetch("./build/output/engine.wasm");
  return WebAssembly.instantiate(await wasm.arrayBuffer());
}
