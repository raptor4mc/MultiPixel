window.customSeedInput = "";

document.getElementById("seedInput").addEventListener("input", e => {
  window.customSeedInput = e.target.value;
});
