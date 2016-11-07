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
  lose () {
    this.lost = true
  },
  move (direction) {
    const movements = {
      'F': () => {
        this.position = newPositionForOrientation(this.position, this.orientation)
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
