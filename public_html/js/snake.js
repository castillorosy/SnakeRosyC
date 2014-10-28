var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

/*
 * to help build the snake and back ground
 */

var food;

var context;
var screenWidth;
var screenHeight;

var gameState;
var gameOverMenu;

gameInitialized();
snakeInitialized();
foodInitialized();
setInterval(gameLoop, 1000 / 30);

/*
 * creating the snake and putting the height
 */

function gameInitialized() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    document.addEventListener("keydown", keyboardHandler);

    gameOverMenu = document.getElementById("gameOver");
    centerMenuPosition(gameOverMenu);

    setState("PLAY");
}

function gameLoop() {
    gameDraw();
    if (gameState == "PLAY") {
        snakeUpdate();
        snakeDraw();
        foodDraw();
    }
}

function gameDraw() {
    context.fillStyle = "rgb(177, 223, 242)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialized() {
    snake = [];
    snakeLength = 1;
    snakeSize = 20;
    snakeDirection = "down";

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}

function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        context.fillStyle = "red";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    checkFoodCollisions(snakeHeadX, snakeHeadY);
    checkWallCollisions(snakeHeadX, snakeHeadY);

    if (snakeDirection == "down") {
        snakeHeadY++;
    }

    else if (snakeDirection == "right") {
        snakeHeadX++;
    }
    if (snakeDirection == "up") {
        snakeHeadY--;
    }
    else if (snakeDirection == "left") {
        snakeHeadX--;
    }



    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}

/*
 * creating the size and food for the snake
 */

function foodInitialized() {
    food = {
        x: 0,
        y: 0
    };
    setFoodPosition();
}

function foodDraw() {
    context.fillStyle = "gray";
    context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}

function setFoodPosition() {
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);
}
/*
 * Input Function
 */

function keyboardHandler(event) {
    console.log(event);

    if (event.keyCode == "39" && snakeDirection != "left") {
        snakeDirection = "right";
    }
    else if (event.keyCode == "40" && snakeDirection != "up") {
        snakeDirection = "down";
    }
    if (event.keyCode == "38" && snakeDirection != "down") {
        snakeDirection = "up";
    }
    else if (event.keyCode == "37" && snakeDirection != "right") {
        snakeDirection = "left";
    }
}
/*
 * collision Handling
 * "snakeHeadX == food.x" is checking wiether or not the snakeHeadX
 * is in the equal to position of the food.x position
 */

function checkFoodCollisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX == food.x && snakeHeadY == food.y) {
        snake.push({
            x: 0,
            y: 0
        });
        snakeLength++;
    }
}

function checkWallCollisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX * snakeSize >= screenWidth || snakeHeadY * snakeSize < 0) {
        setState("GAME OVER");
    }
}
/*
 * game state heading
 * 
 */

function setState(state) {
    gameState = state;
    showMenu(state);
}

/*
 * menu functions
 */

function displayMenu(menu) {
    menu.style.visibility = "visible";
}

function showMenu(state) {
    if (state == "GAME OVER") {
        displayMenu(gameOverMenu);
    }
}

 function centerMenuPosition(menu) {
    menu.style.top = (screenHeight / 2) - (menu.offsetHeight / 2)+ "px";
    menu.style.left = (screenWidth / 2) - (menu.offsetWidth / 2)+ "px";
}
