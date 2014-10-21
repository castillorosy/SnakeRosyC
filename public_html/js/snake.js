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

gameInitialized();
snakeInitialized();
foodInitialized();
setInterval(gameLoop, 1000/30);

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
}

function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(177, 223, 242)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialized() {
    snake = [];
    snakeLength = 5;
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
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    if(snakeDirection == "down") {
      snakeHeadY++;  
    }
    
    else{
        snakeHeadX++;
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
    context.fillStyle = "white";
    context.fillRect(food.x * snakeSize, food.y *  snakeSize, snakeSize);
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
    
    if(event.keyCode === "39") {
        snakeDirection = "right";
    }
    else if(event.keyCode ==="40") {
        snakeDirection = "down";
    }
}