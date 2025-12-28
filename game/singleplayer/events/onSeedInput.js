document.getElementById("seedInput").oninput = e => {
  window.appState.seed = e.target.value || null;
};
