import { onValue, ref } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const playersRef = ref(db, "players");

onValue(playersRef, snapshot => {
  const players = snapshot.val();
  if (!players) return;

  for (let id in players) {
    if (id === auth.currentUser.uid) continue;

    updateOrCreateOtherPlayer(id, players[id]);
  }
});
