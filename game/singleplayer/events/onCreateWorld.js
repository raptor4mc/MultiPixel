document.getElementById("worldName").oninput = e => {
  window.appState.worldName = e.target.value;
};
