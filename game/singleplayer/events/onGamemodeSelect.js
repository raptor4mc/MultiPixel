import gamemodes from "../data/gamemodes.json" assert { type: "json" };
import { Button } from "../ui/components/button.js";

const root = document.getElementById("gamemodeSelect");

gamemodes.forEach(g => {
  root.appendChild(
    Button(g.name, () => window.appState.gamemode = g.id)
  );
});
