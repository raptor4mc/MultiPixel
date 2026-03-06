(function () {
  function execute(parts, ctx) {
    if (ctx.openCommandHelp) {
      ctx.openCommandHelp();
      return { handled: true, ok: true, message: 'Opened command help.' };
    }
    return { handled: true, ok: false, message: 'Help screen is unavailable right now.' };
  }

  window.SingleplayerChatCommandHelp = { execute };
})();
