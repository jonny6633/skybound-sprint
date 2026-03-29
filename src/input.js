class KeyboardInput {
    constructor() {
        this.keyStates = {};
        this.justPressedKeys = new Set();

        // Bind event listeners
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    onKeyDown(event) {
        const key = event.key;
        if (!this.keyStates[key]) {
            this.justPressedKeys.add(key);
        }
        this.keyStates[key] = true;
    }

    onKeyUp(event) {
        const key = event.key;
        this.keyStates[key] = false;
    }

    update() {
        this.justPressedKeys.clear(); // Clear just pressed for next frame
    }

    isKeyPressed(key) {
        return !!this.keyStates[key];
    }
    
    isKeyJustPressed(key) {
        return this.justPressedKeys.has(key);
    }
}

export default KeyboardInput;