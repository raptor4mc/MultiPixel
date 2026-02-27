import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function saveBlockChange(x, y, z, blockId) {
  const blockRef = doc(firestore, "worlds/world1/blocks", `${x}_${y}_${z}`);
  await setDoc(blockRef, { blockId });
}
