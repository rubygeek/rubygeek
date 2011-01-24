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
      bitsToGrow = FOOD_GROWTH,    // Number of bits left to grow
      timer,                       // Game Loop
      food;                        // current food position

  function bit(x,y) {
    return {x: x, y:y};
  }

  function startGame() {
    heading = EAST;
    snakeBits.unshift(bit(4,4));

    placeFood();
   
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
    var head = snakeBits[0];
    switch(heading) {
      case NORTH:
        snakeBits.unshift(bit(head.x, head.y-1) );
        break;
      case SOUTH:
        snakeBits.unshift(bit(head.x, head.y+1) );
        break;
      case EAST:
        snakeBits.unshift(bit(head.x + 1, head.y) );
        break;
      case WEST:
        snakeBits.unshift(bit(head.x - 1, head.y) );
        break;
    }
    if (0 == bitsToGrow) {
      snakeBits.pop();
    } else {
      // leave old tip of tail for growth
      bitsToGrow--;
    }
  }

  function checkCollision() {
  }

  function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }
  
  function inSnake(x, y, includeHead) {
    var length = snakeBits.length,
        i = includeHead ? 0 : 1;
    for( ; i< length; i++) {
      if (x == snakeBits[i].x && y == snakeBits[i].y) 
        return true;
    }
    return false;
  }
   
  function placeFood() {
    var x = Math.round(Math.random() * (MAX_X - 1)),
        y = Math.round(Math.random() * (MAX_Y - 1));

    if (inSnake(x, y, true)) return placeFood();

    food = {x:x, y:y};
  }

  function drawFood() {
    drawInCell(food.x, food.y, function() {
      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.arc(CELL_SIZE/2, CELL_SIZE/2,
              CELL_SIZE/2, 0, 2*PI, true);
      ctx.fill();
     });
  }

  function drawSnake() {
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

