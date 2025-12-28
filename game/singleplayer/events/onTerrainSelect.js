import { Button } from "../ui/components/button.js";

const root = document.getElementById("terrainSelect");

fetch("../data/terrainTypes.json")
  .then(res => res.json())
  .then(terrains => {
    terrains.forEach(t => {
      root.appendChild(
        Button(t.name, () => window.appState.terrain = t.id)
      );
    });
  });
