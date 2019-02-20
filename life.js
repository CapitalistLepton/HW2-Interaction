const WIDTH = 200;
const HEIGHT = 100;
const SIZE = 6;

class Life {
  constructor() {
    this.cells = [];
    for (let i = 0; i < HEIGHT; i++) {
      this.cells.push(new Array(WIDTH).fill(false));
    }

    for (let i = 60; i < 80; i++) {
      for (let j = 90; j < 120; j++) {
        this.cells[i][j] = true;
      }
    }
  }

  tick() {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        this.cells[i][j] = this.check(i, j);
      }
    }
  }

  check(i, j) {
    let neighbors = 0;
    neighbors += this.valueOf(i + 1, j - 1);
    neighbors += this.valueOf(i + 1, j);
    neighbors += this.valueOf(i + 1, j + 1);
    neighbors += this.valueOf(i, j - 1);
    neighbors += this.valueOf(i, j + 1);
    neighbors += this.valueOf(i - 1, j - 1);
    neighbors += this.valueOf(i - 1, j);
    neighbors += this.valueOf(i - 1, j + 1);

    if (this.cells[i][j]) {
      if (neighbors < 2 || neighbors > 3) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (neighbors === 3) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  valueOf(i, j) {
    if (i < HEIGHT && i >= 0 && j < WIDTH && j >= 0) {
      return this.cells[i][j];
    } else {
      return 0;
    }
  }

  draw(ctx) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        if (this.cells[i][j]) {
          ctx.fillRect(j * SIZE, i * SIZE, SIZE, SIZE);
        }
      }
    }
  }
}
