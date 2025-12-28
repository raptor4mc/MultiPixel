import { Button } from "../ui/components/button.js";

const root = document.getElementById("gamemodeSelect");

fetch("../data/gamemodes.json")
  .then(res => res.json())
  .then(gamemodes => {
    gamemodes.forEach(g => {
      root.appendChild(
        Button(g.name, () => {
          window.appState.gamemode = g.id;
        })
      );
    });
  })
  .catch(err => console.error("Failed to load gamemodes:", err));
