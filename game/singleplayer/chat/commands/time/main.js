(function () {
  function parseClock(rawToken) {
    if (!rawToken) return null;
    const m = String(rawToken).trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return null;
    const hours = Number.parseInt(m[1], 10);
    const minutes = Number.parseInt(m[2], 10);
    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
    return { hours, minutes };
  }

  function execute(parts, ctx) {
    const parsed = parseClock(parts[1]);
    if (!parsed) {
      return { handled: true, ok: false, message: 'Usage: /time <HH:MM> (00:00 to 23:59)' };
    }

    if (!ctx.setTimeByClock || !ctx.setTimeByClock(parsed.hours, parsed.minutes)) {
      return { handled: true, ok: false, message: 'Failed to update time.' };
    }

    const hh = String(parsed.hours).padStart(2, '0');
    const mm = String(parsed.minutes).padStart(2, '0');
    return { handled: true, ok: true, message: `Time set to ${hh}:${mm}.` };
  }

  window.SingleplayerChatCommandTime = { execute };
})();
