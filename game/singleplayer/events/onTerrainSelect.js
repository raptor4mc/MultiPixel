import terrains from "../data/terrainTypes.json" assert { type: "json" };
import { Button } from "../ui/components/button.js";

const root = document.getElementById("terrainSelect");

terrains.forEach(t => {
  root.appendChild(
    Button(t.name, () => window.appState.terrain = t.id)
  );
});
