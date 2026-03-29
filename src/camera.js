class Camera {
    constructor(player, boundary) {
        this.player = player;
        this.position = { x: 0, y: 0 };
        this.boundary = boundary;
        this.smoothing = 0.1; // Exponential decay factor
    }

    update() {
        // Smoothly follow the player
        const targetX = this.player.position.x;
        const targetY = this.player.position.y;

        // Exponential decay towards target
        this.position.x += (targetX - this.position.x) * this.smoothing;
        this.position.y += (targetY - this.position.y) * this.smoothing;

        // Boundary clamping
        this.position.x = Math.max(this.boundary.xMin, Math.min(this.position.x, this.boundary.xMax));
        this.position.y = Math.max(this.boundary.yMin, Math.min(this.position.y, this.boundary.yMax));
    }
}

export default Camera;