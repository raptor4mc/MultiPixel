(function () {
  function execute(rawInput, ctx) {
    if (!rawInput || rawInput[0] !== '/') return { handled: false };

    const parts = rawInput.trim().split(/\s+/);
    const command = (parts[0] || '').toLowerCase();

    if (command === '/give' && window.SingleplayerChatCommandGive?.execute) {
      return window.SingleplayerChatCommandGive.execute(parts, ctx);
    }

    if (command === '/spawn' && window.SingleplayerChatCommandSpawn?.execute) {
      return window.SingleplayerChatCommandSpawn.execute(parts, ctx);
    }

    if (command === '/time' && window.SingleplayerChatCommandTime?.execute) {
      return window.SingleplayerChatCommandTime.execute(parts, ctx);
    }

    return { handled: true, ok: false, message: `Unknown command: ${command}` };
  }

  window.SingleplayerChatCommands = { execute };
})();
