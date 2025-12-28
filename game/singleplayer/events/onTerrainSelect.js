window.selectedTerrain = null;

document.querySelectorAll("[data-terrain]").forEach(btn => {
  btn.addEventListener("click", () => {
    window.selectedTerrain = btn.dataset.terrain;

    document
      .querySelectorAll("[data-terrain]")
      .forEach(b => b.classList.remove("selected"));

    btn.classList.add("selected");
  });
});
