import gamemodes from "../data/gamemodes.json" assert { type: "json" };

const root = document.getElementById("gamemodeSelect");

gamemodes.forEach(g => {
  const btn = document.createElement("button");
  btn.textContent = g.name;
  btn.onclick = () => window.appState.gamemode = g.id;
  root.appendChild(btn);
});
