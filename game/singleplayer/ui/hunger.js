(function () {
  const state = {
    value: 20,
    max: 20,
    lastTickAt: 0,
    lowHungerWarned: false,
  };

  let onMessage = null;

  function init({ messageCallback } = {}) {
    onMessage = messageCallback || null;
    render();
  }

  function render() {
    const hud = document.getElementById('hunger-value');
    if (hud) hud.textContent = `${Math.ceil(state.value)}/${state.max}`;
  }

  function update(nowMs, { isMoving, isSprinting }) {
    if (!state.lastTickAt) state.lastTickAt = nowMs;
    const dt = (nowMs - state.lastTickAt) / 1000;
    state.lastTickAt = nowMs;

    const drain = isSprinting ? 0.45 : (isMoving ? 0.08 : -0.18);
    state.value = Math.max(0, Math.min(state.max, state.value - drain * dt));

    if (state.value < 5 && !state.lowHungerWarned) {
      state.lowHungerWarned = true;
      if (onMessage) onMessage('You are starving! Sprint is weaker now.');
    } else if (state.value >= 5) {
      state.lowHungerWarned = false;
    }

    render();
  }

  function getSpeedMultiplier() {
    if (state.value <= 0) return 0.65;
    if (state.value < 5) return 0.8;
    return 1;
  }

  window.HungerSystem = { init, update, getSpeedMultiplier };
})();
