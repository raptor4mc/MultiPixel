const { auth, db } = window.firebaseStuff;

auth.onAuthStateChanged(user => {
  if (!user) return;

  const playerRef = ref(db, "players/" + user.uid);

  // Update player position every 100ms
  setInterval(() => {
    set(playerRef, {
      x: player.position.x,
      y: player.position.y,
      z: player.position.z,
      rotY: player.rotation.y,
      updatedAt: Date.now()
    });
  }, 100);

  // Remove player when disconnecting
  onDisconnect(playerRef).remove();
});
