function newPositionForOrientation (position, orientation) {
  let [x, y] = position
   let movementFunctions = {
     'N': () => {
       return [x - 1, y]
     },
     'E': () => {
       return [x, y + 1]
     },
     'S': () => {
       return [x + 1, y]
     },
     'W': () => {
       return [x, y - 1]
     }
   }
   return movementFunctions[orientation]()
}

function rotateLeft (startingOrientation) {
 // could treat this like a circular array, [n, e, s, w] and rotate, but...
 const leftRotationMappings = {
   'N': 'W',
   'E': 'N',
   'S': 'E',
   'W': 'S'
 }
 return leftRotationMappings[startingOrientation]
}

function rotateRight (startingOrientation) {
  const rightRotationMappings = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
  }
  return rightRotationMappings[startingOrientation]
}

const robot = {
  position: [0, 0],
  orientation: 'N',
  lost: false,
  planet: null,
  move (direction) {
    const movements = {
      'F': () => {
        let initialPosition = this.position
        if (!this.planet.isSmelly(initialPosition)) {
          this.position = newPositionForOrientation(initialPosition, this.orientation)
        }
        if (!this.planet.isPositionInGrid(this.position)) {
          this.lost = true
          this.position = initialPosition
          this.planet.dropScent(initialPosition)
        }
      },
      'L': () => {
        this.orientation = rotateLeft(this.orientation)
      },
      'R': () => {
        this.orientation = rotateRight(this.orientation)
      }
    }
    movements[direction]()
  }
}

module.exports = function (options) {
  return Object.assign(
    Object.create(robot),
    options
  )
}
