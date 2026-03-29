class Collectible {
    constructor(type, x, y) {
        this.type = type; // "coin" or "power-up"
        this.x = x; // X position
        this.y = y; // Y position
        this.collected = false; // Whether the collectible has been collected
        this.bobHeight = 10; // Height of bobbing animation
        this.originalY = y; // Original Y position for bobbing
        this.bobSpeed = 0.05; // Speed of bobbing
        this.startTime = Date.now(); // Time when the bobbing started
    }

    // Bobbing animation method
    bob() {
        const elapsed = (Date.now() - this.startTime) * this.bobSpeed;
        this.y = this.originalY + Math.sin(elapsed) * this.bobHeight;
    }

    // Collection detection method
    collect(playerX, playerY) {
        const distance = Math.sqrt((this.x - playerX) ** 2 + (this.y - playerY) ** 2);
        if (distance < 20 && !this.collected) { // Assuming a collection radius of 20
            this.collected = true;
            return this.type; // Return type on collection (coin or power-up)
        }
        return null; // Not collected
    }

    // Visual rendering method (placeholder for actual rendering logic)
    render(context) {
        if (!this.collected) {
            context.fillStyle = this.type === "coin" ? "yellow" : "blue"; // Color based on type
            context.beginPath();
            context.arc(this.x, this.y, 10, 0, Math.PI * 2); // Draw a circle
            context.fill();
        }
    }
}

export default Collectible;
