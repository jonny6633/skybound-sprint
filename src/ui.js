class HUD {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.isVisible = true;
    }

    // Method to update the score
    updateScore(points) {
        this.score += points;
        this.render();
    }

    // Method to reduce lives
    loseLife() {
        if (this.lives > 0) {
            this.lives--;
            this.render();
        } else {
            console.log('Game Over');
        }
    }

    // Method to increase level
    nextLevel() {
        this.level++;
        this.render();
    }

    // Method to toggle HUD visibility
    toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.render();
    }

    // Method to render HUD
    render() {
        if (this.isVisible) {
            console.log(`Score: ${this.score}`);
            console.log(`Lives: ${this.lives}`);
            console.log(`Level: ${this.level}`);
        } else {
            console.log('HUD is hidden');
        }
    }
}

// Example usage:
const hud = new HUD();
hud.render(); // Initial render

// Update HUD as game progresses
hud.updateScore(10);
hud.loseLife();
hud.nextLevel();
hud.toggleVisibility();
