'use strict';

const planet = require('./planet')

describe('Planet', () => {
  let initialGridPosition
  beforeEach(() => {
    initialGridPosition = {
      'N': false,
      'E': false,
      'S': false,
      'W': false
    }
  })
  describe('init', () => {
    it('should initialise correctly', () => {
      let p = planet(10, 10)
      expect(p.grid[0][0]).toEqual(initialGridPosition)
      expect(p.grid[9][9]).toEqual(initialGridPosition)
      expect(p.grid[10][10]).toEqual(initialGridPosition)
      expect(p.grid[11]).toEqual(undefined)
    })
  })

  describe('dropScent()', () => {
    it('should set flag to true for position and orientation', () => {
      let p = planet(10, 10)
      let position = [0, 0]
      expect(p.grid[0][0]).toEqual(initialGridPosition)
      p.dropScent(position, 'N')
      expect(p.grid[0][0].N).toEqual(true)
    })
  })

  describe('isSmelly()', () => {
    it('should return true if position has scent', () => {
      let p = planet(10, 10)
      let position = [0, 0]
      p.grid[0][0]['E'] = true
      expect(p.isSmelly(position, 'E')).toEqual(true)
    })
    it('should return false if position is not smelly', () => {
      let p = planet(5, 5)
      let position = [0, 0]
      expect(p.isSmelly(position, 'E')).toEqual(false)
    })
  })

  describe('isPositionInGrid()', () => {
    it('should determine if position is within bounds of grid', () => {
      let p = planet(10, 10)
      expect(p.isPositionInGrid([9, 9])).toEqual(true)
      expect(p.isPositionInGrid([-1, 0])).toEqual(false)
      expect(p.isPositionInGrid([10, 10])).toEqual(true)
      expect(p.isPositionInGrid([11, 10])).toEqual(false)
    })
  })
})
