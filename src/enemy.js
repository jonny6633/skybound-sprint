class Enemy {
    constructor(type) {
        this.type = type;
        this.hp = this.setHealth();
    }

    setHealth() {
        switch (this.type) {
            case 'walker':
                return 100;
            case 'flyer':
                return 80;
            case 'jumper':
                return 60;
            case 'boss':
                return 200;
            default:
                throw new Error('Unknown enemy type');
        }
    }

    aiBehavior() {
        switch (this.type) {
            case 'walker':
                return 'Walks back and forth';
            case 'flyer':
                return 'Flies around randomly';
            case 'jumper':
                return 'Jumps and dodges';
            case 'boss':
                return 'Aggressive and powerful';
            default:
                throw new Error('Unknown enemy type');
        }
    }

    render() {
        console.log(`Rendering ${this.type} with ${this.hp} HP`);
    }
}

// Example usage:
const walker = new Enemy('walker');
walker.render();

const flyer = new Enemy('flyer');
flyer.render();

const jumper = new Enemy('jumper');
jumper.render();

const boss = new Enemy('boss');
boss.render();
