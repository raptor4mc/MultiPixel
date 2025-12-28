document.getElementById("seedInput").oninput = e => {
  window.appState.seedText = e.target.value;
};
