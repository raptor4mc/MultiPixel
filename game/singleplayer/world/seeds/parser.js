import { randomSeed } from "./random.js";

export function parseSeed(text) {
  if (!text) return randomSeed();
  let hash = 0;
  for (let c of text) hash = (hash * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(hash);
}
