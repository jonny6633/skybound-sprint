class Particle {
    constructor(x, y, vx, vy, life) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.life = life;
    }

    update(gravity) {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
    }

    isAlive() {
        return this.life > 0;
    }
}

class ParticlePool {
    constructor() {
        this.particles = [];
    }

    emit(x, y, vx, vy, life) {
        const particle = new Particle(x, y, vx, vy, life);
        this.particles.push(particle);
    }

    update(gravity = 0) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.update(gravity);
            if (!particle.isAlive()) {
                this.particles.splice(i, 1);
            }
        }
    }

    render(ctx) {
        for (const particle of this.particles) {
            ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // White color for particles
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    static getInstance() {
        if (!ParticlePool.instance) {
            ParticlePool.instance = new ParticlePool();
        }
        return ParticlePool.instance;
    }
}

// Usage example: 
// const pool = ParticlePool.getInstance();
// pool.emit(x, y, vx, vy, life);
// pool.update(gravity);
// pool.render(ctx);
