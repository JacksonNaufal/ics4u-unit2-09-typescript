/**
 * The program is the classic
 * Vehicle stats program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-17
 */

import Truck from './Truck'
import Bike from './Bike'

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:')
bmx.status()

console.log('Set the cadense to 10')
bmx.accelerate(10)
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('Ring bell.')
bmx.ringBell()

const bigTruck = new Truck('Grey', 'HGC-3456F', 200, 5)

console.log('\nCreated a Truck.\nStatus:')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nApplyed air pressure of 5:')
bigTruck.break(5, 5)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nDone.')
