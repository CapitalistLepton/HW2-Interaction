window.onload = main;

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function (callback, element) {
           window.setTimeout(callback, 1000 / 60);
         };
})();

function main() {
  const canvas = document.getElementById('gameWorld');
  const ctx = canvas.getContext('2d');

  const life = new Life();
  const game = new GameEngine(ctx, life);
  game.start();
}

class GameEngine {
  constructor(ctx, life) {
    this.ctx = ctx;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.life = life;
    console.log('Initialized the game');
  }

  start() {
    console.log('Starting the game');
    var that = this;
    (function gameLoop() {
       that.loop();
       requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
  }

  loop() {
    this.life.tick();
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.save();
    this.life.draw(this.ctx);
    this.ctx.restore();
  }
}
