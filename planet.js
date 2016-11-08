'use strict';

const planet = {
  init (width, height) {
    this.width = width
    this.height = height
    this.grid = []

    for (let i = 0; i < width; i++) {
      this.grid[i] = []
      for (let j = 0; j < height; j++) {
        this.grid[i][j] = false
      }
    }

    return this
  },
  dropScent (position) {
    let [x, y] = position
    this.grid[x][y] = true
  },
  isSmelly (position) {
    let [x, y] = position
    return this.grid[x][y]
  },
  isPositionInGrid (position) {
    let [x, y] = position
    if (x < 0 || y < 0) {
      return false
    }
    return x < this.width && y < this.height
  }
}

module.exports = function (width, height) {
  return Object.create(planet).init(width, height)
}
