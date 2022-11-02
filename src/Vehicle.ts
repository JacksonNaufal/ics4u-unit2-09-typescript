/**
 * The program is the class
 * for the Biplane
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-27
 */

class Vehicle {
  // protected variable used between classes
  private speed = 0
  private color: string
  private readonly maxSpeed: number

  // This is the constructor for the variables
  constructor(color: string, maxSpeed: number) {
    this.color = color
    this.maxSpeed = maxSpeed
  }

  // This returns the colours
  getColor(): string {
    return this.color
  }

  // this sets the colours
  setColor(newColor: string) {
    this.color = newColor
  }

  // this sets the speed
  setSpeed(newSpeed: number): void {
    this.speed = newSpeed
  }

  // this returns the speed
  getSpeed(): number {
    return this.speed
  }

  // this returns the max speed
  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // this calculates the acceleration
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // this calculates the breaking power
  brake(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

// exports file back to main
export = Vehicle
