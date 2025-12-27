import { flat } from "./flat.js";
import { normal } from "./normal.js";

export function generateChunk(cx, cz, seed, type) {
  if (type === "flat") return flat(cx, cz);
  return normal(cx, cz, seed);
}
