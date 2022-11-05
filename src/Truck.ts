/**
 * The program is the class
 * for the Truck.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2022-11-02
 */

import Vehicle from './Vehicle'

abstract class Truck extends Vehicle {
  // this sets the speed
  private licensePlate: string
  private airPressure: number

  // This gets the variables and the color, licensePlate, and hte max Speed
  constructor(
    color: string,
    licensePlate: string,
    maxSpeed: number,
    airPressure: number
  ) {
    super(color, maxSpeed)
    this.licensePlate = licensePlate
    this.airPressure = airPressure
  }

  // this returns the licensePlate
  getLicensePlate(): string {
    return this.licensePlate
  }

  // this sets the licensePlate
  setLicensePlate(licensePlateNew: string): void {
    this.licensePlate = licensePlateNew
  }

  // this returns the air pressure.
  getPressure(): number {
    return this.airPressure
  }

  // this sets the air pressure
  setPressure(airPressure: number): void {
    this.airPressure = airPressure
  }

  // this is the break for truck method
  break(breakTime: number, breakPower: number): void {
    super.setSpeed(
      super.getSpeed() - breakPower * breakTime - this.airPressure * breakTime
    )

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }

  // this displays the status
  status(): void {
    super.status()
    console.log(`
     ---> License Plate: ${this.licensePlate}
    `)
  }
}

// exports file back to main
export = Truck
