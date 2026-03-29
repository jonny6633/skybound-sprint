// src/platform.js

// Platform Generation System

class Platform {
    constructor(id, position, size) {
        this.id = id;
        this.position = position; // { x: number, y: number }
        this.size = size; // { width: number, height: number }
    }

    render() {
        // Rendering logic for the platform
        console.log(`Rendering platform ${this.id} at position ${this.position.x}, ${this.position.y}`);
    }
}

class Chunk {
    constructor(id) {
        this.id = id;
        this.platforms = [];
    }

    addPlatform(platform) {
        this.platforms.push(platform);
    }

    render() {
        console.log(`Rendering chunk ${this.id}`);
        this.platforms.forEach(platform => platform.render());
    }
}

class Level {
    constructor() {
        this.chunks = [];
    }

    generatePlatform(position, size) {
        const platformId = this.chunks.length;
        const newPlatform = new Platform(platformId, position, size);
        return newPlatform;
    }

    validateJumpReachability(platformA, platformB) {
        // Simple height comparison for jump reachability
        return (platformB.position.y - platformA.position.y) <= 1 &&
               Math.abs(platformB.position.x - platformA.position.x) <= platformA.size.width;
    }

    generateLevel(chunkCount) {
        for (let i = 0; i < chunkCount; i++) {
            const chunk = new Chunk(i);
            for (let j = 0; j < 5; j++) {  // Randomly generating 5 platforms per chunk
                const position = { x: Math.random() * 100, y: Math.random() * 20 };
                const size = { width: 20, height: 5 };
                const platform = this.generatePlatform(position, size);
                chunk.addPlatform(platform);
            }
            this.chunks.push(chunk);
        }
    }

    renderLevel() {
        this.chunks.forEach(chunk => chunk.render());
    }
}

// Sample Usage
const level = new Level();
level.generateLevel(3); // Generate 3 chunks
level.renderLevel(); // Render the level