(function () {
  const state = {
    value: 20,
    max: 20,
    lastTickAt: 0,
    lowHungerWarned: false,
    fullHealTimerSec: 0,
    starveTimerSec: 0,
  };

  let onMessage = null;
  let onRegenerate = null;
  let onStarveDamage = null;

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function render() {
    const container = document.getElementById('hunger-container');
    if (!container) return;
    container.innerHTML = '';

    const iconPath = window.SingleplayerConfig?.ASSET_FILEPATHS?.FOOD || '';
    const foods = Math.ceil(state.value / 2);

    for (let i = 0; i < foods; i++) {
      const foodImg = document.createElement('img');
      foodImg.src = iconPath;
      foodImg.className = 'food-icon';
      foodImg.alt = 'Food';
      container.appendChild(foodImg);
    }

    const debug = document.getElementById('hunger-value');
    if (debug) debug.textContent = `Hunger: ${Math.floor(state.value)}/${state.max}`;
  }

  function init({ messageCallback, onRegenerateHealth, onStarveDamageTick } = {}) {
    onMessage = messageCallback || null;
    onRegenerate = onRegenerateHealth || null;
    onStarveDamage = onStarveDamageTick || null;
    state.value = clamp(state.value, 0, state.max);
    render();
  }

  function update(nowMs, { isMoving, isSprinting, isJumping } = {}) {
    if (!state.lastTickAt) state.lastTickAt = nowMs;
    const dt = Math.max(0, (nowMs - state.lastTickAt) / 1000);
    state.lastTickAt = nowMs;

    const drain = isSprinting ? 0.44 : (isMoving ? 0.11 : 0.012);
    const jumpDrain = isJumping ? 0.06 : 0;
    state.value = clamp(state.value - (drain + jumpDrain) * dt, 0, state.max);

    if (state.value < 5 && !state.lowHungerWarned) {
      state.lowHungerWarned = true;
      if (onMessage) onMessage('You are starving! Eat food to recover.');
    } else if (state.value >= 5) {
      state.lowHungerWarned = false;
    }

    if (state.value >= state.max - 0.01) {
      state.fullHealTimerSec += dt;
      if (state.fullHealTimerSec >= 3.5) {
        state.fullHealTimerSec = 0;
        if (onRegenerate) onRegenerate(1);
      }
    } else {
      state.fullHealTimerSec = 0;
    }

    if (state.value <= 0.01) {
      state.starveTimerSec += dt;
      if (state.starveTimerSec >= 4) {
        state.starveTimerSec = 0;
        if (onStarveDamage) onStarveDamage(1);
      }
    } else {
      state.starveTimerSec = 0;
    }

    render();
  }

  function consume(amount) {
    const before = state.value;
    state.value = clamp(state.value + Math.max(0, Number(amount) || 0), 0, state.max);
    render();
    return state.value > before;
  }

  function canConsume() {
    return state.value < state.max;
  }

  function setValue(v) {
    state.value = clamp(Number(v) || 0, 0, state.max);
    state.fullHealTimerSec = 0;
    state.starveTimerSec = 0;
    render();
  }

  function getSpeedMultiplier() {
    if (state.value <= 0) return 0.62;
    if (state.value < 5) return 0.8;
    return 1;
  }

  function getValue() { return state.value; }

  window.HungerSystem = { init, update, consume, canConsume, setValue, getValue, getSpeedMultiplier };
})();
