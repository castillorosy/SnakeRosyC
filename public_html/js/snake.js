var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialized();
gameDraw();


function gameInitialized() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {

}

function gameDraw() {
    context.fillStyle = "rgb(177, 223, 242)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialized() {
    snake = [];
    snakeLength = 15;
    snakeSize = 20;
    
    for (var index = 0; index < snakeLength;) {
}

function snakeDraw() {
   
}

function snakeUpdates() {
    
}