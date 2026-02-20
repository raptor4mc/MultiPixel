(function () {
  const state = {
    value: 20,
    max: 20,
    lastTickAt: 0,
    lowHungerWarned: false,
  };

  let onMessage = null;

  function render() {
    const container = document.getElementById('hunger-container');
    if (!container) return;
    container.innerHTML = '';

    // Optionally, you can hide the hunger bar completely
    // container.style.display = 'none';

    const iconPath = window.SingleplayerConfig?.ASSET_FILEPATHS?.FOOD || '';
    const foods = Math.ceil(state.value / 2);

    for (let i = 0; i < foods; i++) {
      const foodImg = document.createElement('img');
      foodImg.src = iconPath;
      foodImg.className = 'food-icon';
      foodImg.alt = 'Food';
      container.appendChild(foodImg);
    }
  }

  function init({ messageCallback } = {}) {
    onMessage = messageCallback || null;
    render();
  }

  function update(nowMs, { isMoving, isSprinting }) {
    // DO NOTHING – hunger never decreases
    render();
  }

  function getSpeedMultiplier() {
    return 1; // no speed penalty ever
  }

  window.HungerSystem = { init, update, getSpeedMultiplier };
})();
