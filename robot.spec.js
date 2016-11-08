'use strict';

const robot = require('./robot')
const planet = require('./planet')

describe('Robot', () => {
  let p
  beforeEach(() => {
    p = planet(10, 10)
  })

  describe('move()', () => {
    describe('movement with relation to a planet', () => {
      it('should not move if planet has scent on current position', () => {
        let r = robot({
          position: [0, 0],
          orientation: 'N',
          planet: p
        })
        p.dropScent(r.position)
        r.move('F')
        expect(r.position).toEqual([0, 0])
      })
    })
    describe('lost robots', () => {
      it('should not move the position of lost robots', () => {
        let r = robot({
          position: [0, 0],
          orientation: 'N',
          planet: p
        })
        r.move('F')
        expect(r.lost).toEqual(true)
        expect(r.position).toEqual([0, 0])
      })
    })
    describe('simple movements', () => {
        describe('move(F)', () => {
          it('should move x position when moving forward from North', () => {
            let r = robot({
                position: [1, 1],
                orientation: 'N',
                planet: p
            })
            r.move('F')
            expect(r.position).toEqual([0, 1])
            expect(r.orientation).toEqual('N')
          })

          it('should move y position forwards when moving forward from E', () => {
            let r = robot({
              position: [1, 1],
              orientation: 'E',
              planet: p
            })
            r.move('F')
            expect(r.position).toEqual([1, 2])
          })

          it('should move x position when moving forwads from S', () => {
            let r = robot({
              position: [1, 1],
              orientation: 'S',
              planet: p
            })
            r.move('F')
            expect(r.position).toEqual([2, 1])
          })

          it('should move y position backwards when moving forward from W', () => {
            let r = robot({
              position: [1, 1],
              orientation: 'W',
              planet: p
            })
            r.move('F')
            expect(r.position).toEqual([1, 0])
          })

          it('should move x forward two positions', () => {
            let r = robot({
              position: [1, 1],
              orientation: 'E',
              planet: p
            })
            r.move('F')
            r.move('F')
            expect(r.position).toEqual([1, 3])
          })
        })
        describe('move(L)', () => {
          it('should change the orientation from N to W', () => {
            let r = robot({
              planet: p,
              orientation: 'N',
              position: [1, 1]
            })
            r.move('L')
            expect(r.orientation).toEqual('W')
          })
          it('should change orientation from E to N', () => {
            let r = robot({
              planet: p,
              orientation: 'E',
              position: [1, 1]
            })
            r.move('L')
            expect(r.orientation).toEqual('N')
          })
          it('should change orientation from S to E', () => {
            let r = robot({
              planet: p,
              orientation: 'S',
              position: [1, 1]
            })
            r.move('L')
            expect(r.orientation).toEqual('E')
          })
          it('should change orientation from W to S', () => {
            let r = robot({
              planet: p,
              orientation: 'W',
              position: [1, 1]
            })
            r.move('L')
            expect(r.orientation).toEqual('S')
          })
          it('should handle multiple move L calls', () => {
            let r = robot({
              planet: p,
              orientation: 'W',
              position: [1, 1]
            })
            r.move('L')
            r.move('L')
            expect(r.orientation).toEqual('E')
          })
          it('should treat 4 rotations as no rotation', () => {
            let r = robot({
              planet: p,
              orientation: 'W',
              position: [1, 1]
            })
            r.move('L')
            r.move('L')
            r.move('L')
            r.move('L')
            expect(r.orientation).toEqual('W')
          })
        })
        describe('move(R)', () => {
          it('should change orientation from N to E', () => {
            let r = robot({
              planet: p,
              orientation: 'N',
              position: [1, 1]
            })
            r.move('R')
            expect(r.orientation).toEqual('E')
          })
          it('should change orientation from E to S', () => {
            let r = robot({
              planet: p,
              orientation: 'E',
              position: [1, 1]
            })
            r.move('R')
            expect(r.orientation).toEqual('S')
          })
          it('should change orientation from S to W', () => {
            let r = robot({
              planet: p,
              orientation: 'S',
              position: [1, 1]
            })
            r.move('R')
            expect(r.orientation).toEqual('W')
          })
          it('should change orientation from W to N', () => {
            let r = robot({
              planet: p,
              orientation: 'W',
              position: [1, 1]
            })
            r.move('R')
            expect(r.orientation).toEqual('N')
          })
          it('should handle multiple move(R) calls', () => {
            let r = robot({
              planet: p,
              orientation: 'W',
              position: [1, 1]
            })
            r.move('R')
            r.move('R')
            expect(r.orientation).toEqual('E')
          })
        })
        describe('move()', () => {
          it('should follow multiple move calls', () => {
            let r = robot({
              position: [1, 1],
              orientation: 'E',
              planet: p
            })
            r.move('F')
            r.move('L')
            r.move('F')
            r.move('L')
            r.move('F')
            r.move('F')
            r.move('R')
            r.move('R')
            r.move('F')
            expect(r.position).toEqual([0, 1])
          })
        })
      })
  })
})
