(function () {
    const CENSOR_WORDS_PATH = './chat/cencor/words.txt';
    let root = null;
    let logEl = null;
    let inputEl = null;
    let isOpen = false;
    let context = null;
    let censorWords = [];

    function appendMessage(text, type) {
        if (!logEl) return;
        const row = document.createElement('div');
        row.className = `chat-row ${type || 'chat-info'}`;
        row.textContent = text;
        logEl.appendChild(row);
        logEl.scrollTop = logEl.scrollHeight;
    }

    async function loadCensorWords() {
        try {
            const response = await fetch(CENSOR_WORDS_PATH, { cache: 'no-store' });
            if (!response.ok) return;
            const text = await response.text();
            censorWords = text
                .split(/\r?\n/)
                .map((word) => word.trim().toLowerCase())
                .filter(Boolean);
        } catch (err) {
            console.warn('[Chat] Failed to load censor words', err);
        }
    }

    function hasCensoredWord(input) {
        const normalized = ` ${String(input || '').toLowerCase()} `;
        return censorWords.find((word) => normalized.includes(` ${word} `));
    }

    function open() {
        if (!root || isOpen) return;
        isOpen = true;
        root.classList.add('open');
        if (context && context.onOpen) context.onOpen();
        setTimeout(() => {
            if (inputEl) inputEl.focus();
        }, 0);
    }

    function close() {
        if (!root || !isOpen) return;
        isOpen = false;
        root.classList.remove('open');
        if (context && context.onClose) context.onClose();
    }

    function toggle() {
        if (isOpen) close();
        else open();
    }

    function submitChatMessage() {
        if (!inputEl) return;
        const rawInput = inputEl.value.trim();
        if (!rawInput) {
            close();
            return;
        }

        if (rawInput[0] === '/' && window.SingleplayerChatCommands?.execute) {
            const result = window.SingleplayerChatCommands.execute(rawInput, context || {});
            if (result && result.handled) {
                appendMessage(result.message || rawInput, result.ok ? 'chat-system-ok' : 'chat-system-error');
                if (context?.showGameMessage && result.message) context.showGameMessage(result.message);
                inputEl.value = '';
                return;
            }
        }

        const censored = hasCensoredWord(rawInput);
        if (censored) {
            const warning = `Warning: "${censored}" is blocked in chat.`;
            appendMessage(warning, 'chat-system-error');
            if (context?.showGameMessage) context.showGameMessage(warning);
            inputEl.value = '';
            return;
        }

        appendMessage(`You: ${rawInput}`, 'chat-player');
        inputEl.value = '';
    }

    function buildUI() {
        if (document.getElementById('chat-panel')) return;

        root = document.createElement('div');
        root.id = 'chat-panel';
        root.innerHTML = `
            <div id="chat-log"></div>
            <input id="chat-input" type="text" maxlength="180" placeholder="Type message or /give <id> <amount>" autocomplete="off" />
        `;
        document.body.appendChild(root);

        logEl = document.getElementById('chat-log');
        inputEl = document.getElementById('chat-input');

        inputEl.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (e.key === 'Enter') {
                e.preventDefault();
                submitChatMessage();
                return;
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                close();
            }
        });
    }

    function init(initContext) {
        context = initContext || {};
        buildUI();
        loadCensorWords();
        appendMessage('Chat ready. Use /give <id> <amount>.', 'chat-info');
    }

    window.SingleplayerChat = {
        init,
        open,
        close,
        toggle,
        isOpen: () => isOpen
    };
})();
