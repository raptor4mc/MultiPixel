// editSkin.js
// Singleplayer Skin System for Survival Clone

export class EditSkin {
  constructor() {
    this.itemNames = [
      "base", "footwear", "eye", "mouth",
      "bottom", "top", "hair", "headwear"
    ];

    this.baseColor = [0xffeeb592, 0xffb47a57, 0xff8d471d];

    this.color = [
      0xff613915,
      0xff97491b,
      0xffb17050,
      0xffe2bc7b,
      0xff706662,
      0xff151515,
      0xffc21c1c,
      0xff178c32,
      0xffae2ad3,
      0xffebe8e4,
      0xffe3dd26,
      0xff449acc,
      0xff124d87,
      0xfffc0eb3,
      0xffd0672a,
    ];

    this.steve = {};
    this.alex = {};

    this.base = [];
    this.footwear = [];
    this.mouth = [];
    this.eye = [];
    this.bottom = [];
    this.top = [];
    this.hair = [];
    this.headwear = [];

    this.masks = {};
    this.previewRotations = {};
    this.ranks = {};

    this.playerSkin = null; // singleplayer only
  }

  // Convert ARGB int to #RRGGBB
  colorToHex(argb) {
    const r = (argb >> 16) & 255;
    const g = (argb >> 8) & 255;
    const b = argb & 255;
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  }

  registerItem(item) {
    if (!this[item.type]) {
      throw new Error("Invalid skin type: " + item.type);
    }

    const texture = item.texture || "blank.png";

    if (item.steve) this.steve[item.type] = texture;
    if (item.alex) this.alex[item.type] = texture;

    this[item.type].push(texture);
    this.masks[texture] = item.mask;
    this.previewRotations[texture] = item.preview_rotation;
    this.ranks[texture] = item.rank;
  }

  compileSkin(skin) {
    if (!skin) return null;

    const layers = [];
    const ranked = [];

    this.itemNames.forEach((type, index) => {
      const texture = skin[type];
      if (!texture || texture === "blank.png") return;

      const rank = this.ranks[texture] ?? index * 10;

      let layer = {
        texture,
        color: null,
      };

      if (skin[type + "_color"] && this.masks[texture]) {
        layer.color = this.colorToHex(skin[type + "_color"]);
      }

      layers[rank] = layer;
      ranked.push(rank);
    });

    ranked.sort((a, b) => a - b);

    return ranked.map(rank => layers[rank]);
  }

  setPlayerSkin(skin) {
    this.playerSkin = skin;
    return this.compileSkin(skin);
  }

  loadDefaults() {
    const random = Math.random() > 0.5 ? "steve" : "alex";
    this.playerSkin = JSON.parse(JSON.stringify(this[random]));
    return this.compileSkin(this.playerSkin);
  }

  async loadFromJSON(path) {
    const res = await fetch(path);
    const json = await res.json();

    json.forEach(item => this.registerItem(item));

    // Default Steve colors
    this.steve.base_color = this.baseColor[0];
    this.steve.hair_color = this.color[0];
    this.steve.top_color = this.color[11];
    this.steve.bottom_color = this.color[12];

    // Default Alex colors
    this.alex.base_color = this.baseColor[0];
    this.alex.hair_color = this.color[14];
    this.alex.top_color = this.color[7];
    this.alex.bottom_color = this.color[0];
  }
}
