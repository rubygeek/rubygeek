var SnakeGame = function(canvas) {
  var NORTH = 1, EAST = 2, SOUTH = 4, WEST = 8, HEAD = 16, TAIL = 32,
      CELL_SIZE = 20,
      PI = Math.PI,
      MAX_X = 30, MAX_Y = 20,
      FOOD_GROWTH = 5;

  // Canvas and Drawing Context
  var canvas = $(canvas)[0],
      ctx = canvas.getContext('2d');
  
  var snakeBits = [],              // position of each bit of snake
      heading,                     // current heading (N S E W)
      hitsToGrow = FOOD_GROWTH,    // Number of bits left to grow
      timer,                       // Game Loop
      food;                        // current food position

  function bit(x,y) {
    return {x: x, y:y};
  }

  function startGame() {
    heading = EAST;
    snakeBits.unshift(bit(4,4));
    snakeBits.unshift(bit(5, 4));

    //placeFood();
   
    clearInterval(timer);
    timer = setInterval(gameLoop, 100); //10 times a second
  } 

  function gameLoop() {
    advanceSnake();
    checkCollision();
    clearCanvas();
    drawSnake();
    drawFood();
  }

  function advanceSnake() {
  }

  function checkCollision() {
  }

  function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }

  function drawSnake() {
    
  }

  function drawFood() {
    var i, length = snakeBits.length;
    for(i = 0; i < length; i++){
      drawBit(snakeBits[i]);
    }
  }
  
  function drawBit(bit) {
    drawInCell(bit.x, bit.y, function() {
      ctx.beginPath();
      ctx.rect(0,0,CELL_SIZE, CELL_SIZE);
      ctx.fill(); }); 
  }
  
  function drawInCell(cellX, cellY, fn) {
    var x = cellX * CELL_SIZE,
        y = cellY * CELL_SIZE;
    ctx.save(); 
    ctx.translate(x, y);
    fn();
    ctx.restore();
  }

  return {
    start: startGame
  }
};

$(function() {
 window.game = SnakeGame('#game');
   game.start();
});

