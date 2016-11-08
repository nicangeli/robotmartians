# Robot Martians

## Prerequisites

You'll need Node and NPM installed. I'm using node v5.1.0 and npm 3.3.12

## Installation

Run the following:

```
  npm install
```

## Running it

I haven't implemented a front end for this, nor have I implemented a way of reading input from STDIN or anything. In order to run the code, you'll need to run the tests.

I'm using jest to run the tests, but you should be able to run:

```
  npm test
```

The main tests are in index.spec.js, the robot.spec.js and planet.spec.js test those parts of the code independantly.


## Todos

Given more time, I would:

* Read from standard input / or attach a front end to this
* allow a robot to move following a sequence of move commands
* improve the model, where does a position and orientation really belong? Can a robot really have an orientation that isn't relative to a planet?
* move away from the OO style here, I'm keen to see / discuss how this could be modelled alternatively.
