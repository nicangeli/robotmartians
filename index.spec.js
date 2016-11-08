'use strict';

// this is main() function as it were, i'd need to switch
// this out for something that reads from stdin or a input in a
// <form> or something, but some simple tests will have to
// do for now

const robot = require('./robot')
const planet = require('./planet')

describe('sample input', () => {
  it('should run for sample input 1', () => {
    let p = planet(5, 3)
    let r = robot({
      planet: p,
      orientation: 'E',
      position: [1, 1]
    })
    r.move('R')
    r.move('F')
    r.move('R')
    r.move('F')
    r.move('R')
    r.move('F')
    r.move('R')
    r.move('F')
    expect(r.position).toEqual([1, 1])
    expect(r.orientation).toEqual('E')
    expect(r.lost).toEqual(false)

    let r2 = robot({
      planet: p,
      orientation: 'N',
      position: [3, 2]
    })

    r2.move('F')
    r2.move('R')
    r2.move('R')
    r2.move('F')
    r2.move('L')
    r2.move('L')
    r2.move('F')
    r2.move('F')
    r2.move('R')
    r2.move('R')
    r2.move('F')
    r2.move('L')
    r2.move('L')
    expect(r2.position).toEqual([3, 3])
    expect(r2.orientation).toEqual('N')
    expect(r2.lost).toEqual(true)

    let r3 = robot({
      planet: p,
      orientation: 'W',
      position: [0, 3]
    })

    r3.move('L')
    r3.move('L')
    r3.move('F')
    r3.move('F')
    r3.move('F')
    r3.move('L')
    r3.move('F')
    r3.move('L')
    r3.move('F')
    r3.move('L')
    expect(r3.position).toEqual([2, 3])
    expect(r3.orientation).toEqual('S')
    expect(r3.lost).toEqual(false)

  })

})
