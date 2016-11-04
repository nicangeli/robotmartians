function Martian (x, y, orientation) {
  this.x = x
  this.y = y
  this.orientation = orientation
}

Martian.prototype.move = function(instruction) {
  const moves = {
    'F': () => {
      this.y = this.y + 1
    },
    'L': () => {
      this.orientation = this.orientation.rotate('L')
    },
    'R': () => {
      this.orientation = this.orientation.rotate('R')
    }
  }
  moves[instruction]()
}

function Orientation (orientation) {
  this.orientation = orientation
}

Orientation.prototype.rotate = function(instruction) {
  let orientations = ['N', 'S', 'E', 'W']
  let orientationIndex
  let nextOrientationMap = {
    'L': () => {

    },
    'R': () => {

    }
  }
}
