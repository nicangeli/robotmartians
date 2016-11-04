'use strict';

module.exports = function(gameState) {


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

  const move = (direction) =>  {
    let { position, orientation, planet } = gameState

    let movements = {
      'F': () => {
        let [x, y] = position
        const newPosition = newPositionForOrientation(position, orientation)
        return {
          position: newPosition,
          orientation,
          planet
        }
      },
      'L': () => {
        return {
          position,
          planet,
          orientation: rotateLeft(orientation)
        }
      },
      'R': () => {
        return {
          position,
          planet,
          orientation: rotateRight(orientation)
        }
      }
    }
    return movements[direction]()
  }

  return {
    move
  }
}
