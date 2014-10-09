var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialized();
snakeInitialized();
gameLoop();


function gameInitialized() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    gameDraw;
    snakeUpdate();
    snakeDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(177, 223, 242)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialized() {
    snake = [];
    snakeLength = 15;
    snakeSize = 20;

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}
function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);

        snakeDraw();
    }
}
function snakeUpdates() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    snakeHeadX++;

    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}