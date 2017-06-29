'use strict';

class Robot {

  constructor(bearing, coordinates) {
    this.bearing = bearing
    this.coordinates = [];
  }

  orient(direction) {

    const directions = [ 'east', 'south', 'west', 'north' ];

    if (!directions.includes(direction)) {
      throw new Error("Invalid Robot Bearing")
    } else {
      switch (direction) {
        case 'east':
          this.bearing = 'east'
          break
        case 'west':
          this.bearing = 'west'
          break
        case 'south':
          this.bearing = 'south'
          break
        case 'north':
          this.bearing = 'north'
          break
      }
    }
  }

  turnRight() {

    const directions = [ 'east', 'south', 'west', 'north' ];

    let cbi = directions.indexOf(this.bearing)

    if (cbi === directions.length - 1) {
      this.bearing = directions[0]
    } else {
      this.bearing = directions[cbi + 1]
    }
  }

  turnLeft() {

    const directions = [ 'east', 'south', 'west', 'north' ];

    let cbi = directions.indexOf(this.bearing)

    if (cbi === 0) {
      this.bearing = directions[3]
    } else {
      this.bearing = directions[cbi - 1]
    }
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'east':
        this.coordinates[0]++
        break;
      case 'west':
        this.coordinates[0]--
        break;
    }
  }

  instructions(string) {

    let instruct = string.split("")
    let array = [];

    instruct.forEach(ele => {
      switch (ele) {
        case 'L':
          array.push('turnLeft')
          break;
        case 'R':
          array.push('turnRight')
          break;
        case 'A':
          array.push('advance')
          break;
      }
    })
    return array;
  }

  place(placement) {
    this.at(placement['x'], placement['y'])
    this.orient(placement['direction'])
  }

  evaluate(string) {

    let instruct = string.split("")

    instruct.forEach(ele => {
      switch (ele) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
      }
    })
  }

}
