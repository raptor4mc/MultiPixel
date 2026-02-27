import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const blocksRef = collection(firestore, "worlds/world1/blocks");

onSnapshot(blocksRef, snapshot => {
  snapshot.docChanges().forEach(change => {
    const data = change.doc.data();
    const [x, y, z] = change.doc.id.split("_").map(Number);
    setBlock(x, y, z, data.blockId);
  });
});
