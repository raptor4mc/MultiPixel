import terrains from "../data/terrainTypes.json" assert { type: "json" };

const root = document.getElementById("terrainSelect");

terrains.forEach(t => {
  const btn = document.createElement("button");
  btn.textContent = t.name;
  btn.onclick = () => window.appState.terrain = t.id;
  root.appendChild(btn);
});
