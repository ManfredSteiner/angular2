import { Car } from './car';
import { Engine } from './engine';
import { Tires } from './tires';

// ********** example 1 **********
export function simpleCar() {
  // Simple car with 4 cylinders and Flintstone tires.
  let car = new Car();
  car.description = 'Simple';
  return car;
}
  
//********** example 2 **********
export function superCar() {
  // Super car with 12 cylinders and Flintstone tires.
  let bigCylinders = 12;
  let car = new Car();
  car.description = 'Super';
  return car;
}

//********** example 3 **********
export function testCar() {
  // Test car with 8 cylinders and YokoGoodStone tires.
  let car = new Car();
  car.description = 'Test';
  return car;
}