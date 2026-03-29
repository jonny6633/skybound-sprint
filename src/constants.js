// Game Configuration Constants

// Physics Parameters
const PHYSICS = {
    GRAVITY: 9.81,  // Gravity in m/s^2
    AIR_DENSITY: 1.225,  // Air density in kg/m^3
    TIME_STEP: 0.016,  // Time step in seconds
};

// World Settings
const WORLD_SETTINGS = {
    WIDTH: 1920,  // World width in pixels
    HEIGHT: 1080,  // World height in pixels
    BACKGROUND_COLOR: '#87CEEB',  // Sky color
};

// Colors
const COLORS = {
    PLAYER_COLOR: '#FF0000',  // Player color
    ENEMY_COLOR: '#0000FF',  // Enemy color
    PLATFORM_COLOR: '#00FF00',  // Platform color
};

// Entity Configurations
const ENTITY_CONFIG = {
    PLAYER: {
        WIDTH: 50,
        HEIGHT: 50,
        MAX_SPEED: 300,  // Speed in pixels/s
    },
    ENEMY: {
        WIDTH: 40,
        HEIGHT: 40,
        MAX_SPEED: 200,
    },
};

export { PHYSICS, WORLD_SETTINGS, COLORS, ENTITY_CONFIG };