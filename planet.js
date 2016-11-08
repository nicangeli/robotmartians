'use strict';

const planet = {
  init (width, height) {
    this.width = width
    this.height = height
    this.grid = []

    for (let i = 0; i <= width; i++) {
      this.grid[i] = []
      for (let j = 0; j <= height; j++) {
        this.grid[i][j] = {
          'N': false,
          'S': false,
          'E': false,
          'W': false
        }
      }
    }

    return this
  },
  dropScent (position, orientation) {
    let [x, y] = position
    let existingScent = this.grid[x][y]
    this.grid[x][y] = Object.assign({}, existingScent, {[orientation]: true})
  },
  isSmelly (position, orientation) {
    let [x, y] = position
    return this.grid[x][y][orientation]
  },
  isPositionInGrid (position) {
    let [x, y] = position
    if (x < 0 || y < 0) {
      return false
    }
    return x <= this.width && y <= this.height
  }
}

module.exports = function (width, height) {
  return Object.create(planet).init(width, height)
}
