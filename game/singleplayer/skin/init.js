(function () {
  function createSkinSystem(options = {}) {
    const showGameMessage = typeof options.showGameMessage === 'function' ? options.showGameMessage : () => {};

    function toggleInventorySkinPreview() {
      const preview = document.getElementById('inventory-skin-preview');
      if (!preview) return;
      preview.classList.toggle('active');
      showGameMessage('Skin editor opened in preview mode');
    }

    function updateSkinPreviewLook(clientX, clientY, isInventoryOpen) {
      if (!isInventoryOpen) return;
      const head = document.getElementById('inventory-skin-head');
      const wrap = document.getElementById('inventory-skin-preview');
      if (!head || !wrap) return;
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(-1, Math.min(1, (clientX - cx) / (rect.width / 2)));
      const dy = Math.max(-1, Math.min(1, (clientY - cy) / (rect.height / 2)));
      head.style.setProperty('--skin-look-x', `${dx * 28}deg`);
      head.style.setProperty('--skin-look-y', `${-dy * 20}deg`);
    }

    return {
      toggleInventorySkinPreview,
      updateSkinPreviewLook,
    };
  }

  window.SingleplayerSkinSystem = { create: createSkinSystem };
})();
