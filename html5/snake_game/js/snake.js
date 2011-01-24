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

};

$(function() {
 window.game = SnakeGame('#game');
  // game.start();
});

