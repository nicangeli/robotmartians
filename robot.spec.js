'use strict';

const robot = require('./robot')

describe('Robot', () => {
  let planet
  beforeEach(() => {
    planet = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]
  })

  describe('move()', () => {
      describe('move(F)', () => {
        it('should move x position when moving forward from North', () => {
          let r = robot({
              position: [1, 1],
              orientation: 'N',
              planet
          })
          let newState = r.move('F')
          expect(newState.position).toEqual([0, 1])
          expect(newState.orientation).toEqual('N')
          expect(newState.planet).toEqual(planet)
        })

        it('should move y position forwards when moving forward from E', () => {
          let r = robot({
            position: [1, 1],
            orientation: 'E',
            planet
          })
          let newState = r.move('F')
          expect(newState.position).toEqual([1, 2])
        })

        it('should move x position when moving forwads from S', () => {
          let r = robot({
            position: [1, 1],
            orientation: 'S',
            planet
          })
          let newState = r.move('F')
          expect(newState.position).toEqual([2, 1])
        })

        it('should move y position backwards when moving forward from W', () => {
          let r = new robot({
            position: [1, 1],
            orientation: 'W',
            planet
          })
          let newState = r.move('F')
          expect(newState.position).toEqual([1, 0])
        })
      })
      describe('move(L)', () => {
        it('should change the orientation from N to W', () => {
          let r = robot({
            planet,
            orientation: 'N',
            position: [1, 1]
          })
          let newState = r.move('L')
          expect(newState.orientation).toEqual('W')
        })
        it('should change orientation from E to N', () => {
          let r = robot({
            planet,
            orientation: 'E',
            position: [1, 1]
          })
          let newState = r.move('L')
          expect(newState.orientation).toEqual('N')
        })
        it('should change orientation from S to E', () => {
          let r = robot({
            planet,
            orientation: 'S',
            position: [1, 1]
          })
          let newState = r.move('L')
          expect(newState.orientation).toEqual('E')
        })
        it('should change orientation from W to S', () => {
          let r = robot({
            planet,
            orientation: 'W',
            position: [1, 1]
          })
          let newState = r.move('L')
          expect(newState.orientation).toEqual('S')
        })
      })
      describe('move(R)', () => {
        it('should change orientation from N to E', () => {
          let r = robot({
            planet,
            orientation: 'N',
            position: [1, 1]
          })
          let newState = r.move('R')
          expect(newState.orientation).toEqual('E')
        })
        it('should change orientation from E to S', () => {
          let r = robot({
            planet,
            orientation: 'E',
            position: [1, 1]
          })
          let newState = r.move('R')
          expect(newState.orientation).toEqual('S')
        })
        it('should change orientation from S to W', () => {
          let r = robot({
            planet,
            orientation: 'S',
            position: [1, 1]
          })
          let newState = r.move('R')
          expect(newState.orientation).toEqual('W')
        })
        it('should change orientation from W to N', () => {
          let r = robot({
            planet,
            orientation: 'W',
            position: [1, 1]
          })
          let newState = r.move('R')
          expect(newState.orientation).toEqual('N')
        })
      })
  })
})
