/**
 * The program is the class
 * for the Bike.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-11-02
 */

import Vehicle from './Vehicle'

class Bike extends Vehicle {
  // This is the cadence variable
  private cadence = 0

  // this sets the speed
  getCadence(): number {
    return this.cadence
  }

  // this accelerates the boeing
  accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // This rings the bell
  ringBell(): void {
    console.log('Ding ding!')
  }

  // This shows the status
  status(): void {
    console.log(`
    ---> Speed: ${super.getSpeed()}
    ---> MaxSpeed: ${super.getMaxSpeed()}
    ---> Color: ${super.getColor()}
    ---> Cadence: ${this.cadence}
    `)
  }

  // exports file back to main
}
export = Bike
