import { Car } from './car';
import { Engine } from './engine';
import { Tires } from './tires';

// ********** example 1 **********
export function simpleCar() {
  // Simple car with 4 cylinders and Flintstone tires.
  // DI for Car, No DI for Engine and Tires
  let car = new Car(new Engine(), new Tires());
  car.description = 'Simple';
  return car;
}


// ********** example 2 **********
class Engine2 {
  public description = 'DI';
  constructor(public cylinders: number) { }
}

// ********* Strange code example *************
// http://stackoverflow.com/questions/42360617
// class Engine2 can be used instead of class Engine as long
// as attributes of Engine are available. If you comment out
// the attribute description, you get an error.
// TypeScript uses structural typing instead of nominal typing (like Java)
// See: https://www.typescriptlang.org/docs/handbook/type-compatibility.html

class Engine3 extends Engine {
  constructor(public cylinders: number) { 
    super();
  }
}
  
export function engine2Car() {
  // Engine2 car with 8 cylinders and Flintstone tires.
  // DI for Car and Engine2, No DI for Tires
  let car = new Car(new Engine2(8), new Tires());
  car.description = 'Engine2';
  return car;
}

export function engine3Car() {
  // Engine3 car with 8 cylinders and Flintstone tires.
  // DI for Car and Engine3, No DI for Tires
  let car = new Car(new Engine3(12), new Tires());
  car.description = 'Engine3';
  return car;
}

//********** example 3 **********
  class MockEngine extends Engine { cylinders = 8; }
  class MockTires  extends Tires  { make = 'YokoGoodStone'; }

export function testCar() {
  // Test car with 8 cylinders and YokoGoodStone tires.
  // DI for Car, No DI for engine and tires
  let car = new Car(new MockEngine(), new MockTires());
  car.description = 'Test';
  return car;
}