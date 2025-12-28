window.selectedGamemode = null;

document.querySelectorAll("[data-gamemode]").forEach(btn => {
  btn.addEventListener("click", () => {
    window.selectedGamemode = btn.dataset.gamemode;

    document
      .querySelectorAll("[data-gamemode]")
      .forEach(b => b.classList.remove("selected"));

    btn.classList.add("selected");
  });
});
