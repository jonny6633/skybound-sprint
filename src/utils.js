// Utility functions

function rectOverlap(rect1, rect2) {
    return !(rect2.left > rect1.right ||
             rect2.right < rect1.left ||
             rect2.top > rect1.bottom ||
             rect2.bottom < rect1.top);
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function randChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function lerp(start, end, t) {
    return start + (end - start) * t;
}