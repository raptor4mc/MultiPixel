// audio.js
// Modular audio system for MultiPixel Boot Sequence

export const AudioManager = {
    sounds: {
        swooshDevour: new Audio("audio/swoosh_devour.mp3"),
        clickMorph: new Audio("audio/click_morph.mp3"),
        swooshExpand: new Audio("audio/swoosh_expand.mp3"),
        impactDunDuuuu: new Audio("audio/impact_dunduuuu.mp3"),

        // Loops
        //loadingMusic: new Audio("audio/loading_music_loop.mp3"),
        //coreHum: new Audio("audio/core_hum_loop.mp3"),
        //loadingTick: new Audio("audio/loading_tick.mp3")
    },

    // Play a one-shot sound
    play(name, volume = 1.0) {
        const s = this.sounds[name];
        if (!s) return;

        s.pause();
        s.currentTime = 0;
        s.volume = volume;
        s.loop = false;
        s.play();
    },

    // Start a looping sound
    loop(name, volume = 1.0) {
        const s = this.sounds[name];
        if (!s) return;

        s.volume = volume;
        s.loop = true;
        s.play();
    },

    // Stop a sound (loop or one-shot)
    stop(name) {
        const s = this.sounds[name];
        if (!s) return;

        s.pause();
        s.currentTime = 0;
    },

    // Stop ALL sounds (useful when leaving boot)
    stopAll() {
        for (const key in this.sounds) {
            const s = this.sounds[key];
            s.pause();
            s.currentTime = 0;
        }
    }
};

