'use strict';

// create grid

function createGrid(width, height) {
  let grid = new Array(width)
  for (let i = 0; i < width; i++) {
    grid[i] = new Array(width)
  }
  return grid
}

const grid = createGrid(4, 3)
