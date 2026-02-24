// DOM Elements
const gameScreen = document.getElementById('game-screen');
const playerBox = document.getElementById('player-box');
const coordX = document.getElementById('coord-x');
const coordY = document.getElementById('coord-y');
const coordTop = document.getElementById('coord-top');
const coordBottom = document.getElementById('coord-bottom');
const coordLeft = document.getElementById('coord-left');
const coordRight = document.getElementById('coord-right');
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const operationDisplay = document.getElementById('operation-display');
const toggleBoundaries = document.getElementById('toggle-boundaries');
const boundaryMessage = document.getElementById('boundary-message');
const liveCode = document.getElementById('live-code');

// Box state
let box = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    get right() { return this.x + this.width; },
    get bottom() { return this.y + this.height; },
    get left() { return this.x; },
    get top() { return this.y; }
};

let isDragging = false;
let offsetX, offsetY;
let speed = 5;

// --- Helper Functions ---

function getBounds() {
    return {
        width: gameScreen.clientWidth,
        height: gameScreen.clientHeight
    };
}

function updateBoxPosition() {
    playerBox.style.left = box.x + 'px';
    playerBox.style.top = box.y + 'px';
    updateCoordinatesDisplay();
    updateLiveCodePreview();
}

function updateCoordinatesDisplay() {
    coordX.textContent = box.x;
    coordY.textContent = box.y;
    coordTop.textContent = box.top;
    coordBottom.textContent = box.bottom;
    coordLeft.textContent = box.left;
    coordRight.textContent = box.right;
}

function updateLiveCodePreview() {
    generateLiveCode();
}

function generateLiveCode() {
    const bounds = getBounds();
    let code = `WIDTH = ${bounds.width}
HEIGHT = ${bounds.height}
box = Rect(${box.x}, ${box.y}, ${box.width}, ${box.height})
speed = ${speed}

def draw():
    screen.fill("darkblue")
    screen.draw.filled_rect(box, "lime")

def update():
    # RIGHT: move right if not at the edge
    if keyboard.right and box.right < WIDTH:
        box.x += speed
    
    # LEFT: move left if not at the edge
    if keyboard.left and box.left > 0:
        box.x -= speed
    
    # UP: y gets SMALLER (screen y is flipped!)
    if keyboard.up and box.top > 0:
        box.y -= speed
    
    # DOWN: y gets BIGGER
    if keyboard.down and box.bottom < HEIGHT:
        box.y += speed
`;
    liveCode.textContent = code;
}

function moveBox(direction) {
    const bounds = getBounds();
    const WIDTH = bounds.width;
    const HEIGHT = bounds.height;
    
    let moved = false;
    let opText = "";
    boundaryMessage.textContent = "";

    const checkBoundaries = toggleBoundaries.checked;
    let newX = box.x;
    let newY = box.y;

    switch (direction) {
        case 'right':
            opText = `box.x = box.x + ${speed}`;
            if (!checkBoundaries || box.right < WIDTH) {
                newX += speed;
                moved = true;
            } else {
                boundaryMessage.textContent = `Condition: box.right < WIDTH (False)`;
            }
            break;
        case 'left':
            opText = `box.x = box.x - ${speed}`;
            if (!checkBoundaries || box.left > 0) {
                newX -= speed;
                moved = true;
            } else {
                boundaryMessage.textContent = `Condition: box.left > 0 (False)`;
            }
            break;
        case 'up':
            opText = `box.y = box.y - ${speed}`;
            if (!checkBoundaries || box.top > 0) {
                newY -= speed;
                moved = true;
            } else {
                boundaryMessage.textContent = `Condition: box.top > 0 (False)`;
            }
            break;
        case 'down':
            opText = `box.y = box.y + ${speed}`;
            if (!checkBoundaries || box.bottom < HEIGHT) {
                newY += speed;
                moved = true;
            } else {
                boundaryMessage.textContent = `Condition: box.bottom < HEIGHT (False)`;
            }
            break;
    }

    if (moved) {
        if (checkBoundaries) {
            box.x = Math.max(0, Math.min(WIDTH - box.width, newX));
            box.y = Math.max(0, Math.min(HEIGHT - box.height, newY));
        } else {
            box.x = newX;
            box.y = newY;
        }
        updateBoxPosition();
    }
    operationDisplay.textContent = opText;
}

// --- Mouse Event Listeners ---

playerBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - playerBox.getBoundingClientRect().left;
    offsetY = e.clientY - playerBox.getBoundingClientRect().top;
    playerBox.style.cursor = 'grabbing';
});

gameScreen.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const bounds = getBounds();
    let newX = e.clientX - gameScreen.getBoundingClientRect().left - offsetX;
    let newY = e.clientY - gameScreen.getBoundingClientRect().top - offsetY;

    if (toggleBoundaries.checked) {
        newX = Math.max(0, Math.min(bounds.width - box.width, newX));
        newY = Math.max(0, Math.min(bounds.height - box.height, newY));

        if (newX === 0 && box.x > 0) boundaryMessage.textContent = `Condition: box.left > 0 (False)`;
        else if (newX === bounds.width - box.width && box.x < bounds.width - box.width) boundaryMessage.textContent = `Condition: box.right < WIDTH (False)`;
        else if (newY === 0 && box.y > 0) boundaryMessage.textContent = `Condition: box.top > 0 (False)`;
        else if (newY === bounds.height - box.height && box.y < bounds.height - box.height) boundaryMessage.textContent = `Condition: box.bottom < HEIGHT (False)`;
        else boundaryMessage.textContent = "";
    }

    box.x = newX;
    box.y = newY;
    updateBoxPosition();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    playerBox.style.cursor = 'grab';
    boundaryMessage.textContent = "";
});

// --- Touch Event Listeners (Mobile Support) ---

playerBox.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    isDragging = true;
    offsetX = touch.clientX - playerBox.getBoundingClientRect().left;
    offsetY = touch.clientY - playerBox.getBoundingClientRect().top;
});

gameScreen.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const bounds = getBounds();
    const touch = e.touches[0];
    let newX = touch.clientX - gameScreen.getBoundingClientRect().left - offsetX;
    let newY = touch.clientY - gameScreen.getBoundingClientRect().top - offsetY;

    if (toggleBoundaries.checked) {
        newX = Math.max(0, Math.min(bounds.width - box.width, newX));
        newY = Math.max(0, Math.min(bounds.height - box.height, newY));
    }

    box.x = newX;
    box.y = newY;
    updateBoxPosition();
});

window.addEventListener('touchend', () => {
    isDragging = false;
    boundaryMessage.textContent = "";
});

// --- Keyboard Event Listeners ---

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveBox('up');
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveBox('down');
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        moveBox('left');
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        moveBox('right');
    }
});

// --- Button Click Listeners ---

btnUp.addEventListener('click', () => moveBox('up'));
btnDown.addEventListener('click', () => moveBox('down'));
btnLeft.addEventListener('click', () => moveBox('left'));
btnRight.addEventListener('click', () => moveBox('right'));

// --- Boundary Toggle Listener ---

toggleBoundaries.addEventListener('change', () => {
    if (!toggleBoundaries.checked) {
        boundaryMessage.textContent = "";
    }
    updateBoxPosition();
});

// --- Window Resize Listener ---

window.addEventListener('resize', () => {
    updateBoxPosition();
});

// --- Initial Setup ---

updateBoxPosition();
