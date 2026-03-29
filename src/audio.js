// src/audio.js

import Howler from 'howler';

class AudioManager {
    constructor() {
        this.sounds = {};
        this.isMuted = false;
    }

    loadSound(key, url) {
        this.sounds[key] = new Howl({
            src: [url],
            html5: true
        });
    }

    playSound(key) {
        if (!this.isMuted && this.sounds[key]) {
            this.sounds[key].play();
        }
    }

    stopSound(key) {
        if (this.sounds[key]) {
            this.sounds[key].stop();
        }
    }

    mute() {
        this.isMuted = true;
    }

    unmute() {
        this.isMuted = false;
    }
}

export default new AudioManager();

// Example usage:
// const audioManager = new AudioManager();
// audioManager.loadSound('explosion', 'path/to/explosion.mp3');
// audioManager.playSound('explosion');
// audioManager.mute();
// audioManager.unmute();