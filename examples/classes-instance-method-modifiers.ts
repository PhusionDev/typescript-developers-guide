namespace ClassesInstanceMethodModifiers {
  class Vehicle {
    drive(): void {
      console.log('chugga chugga');
    }

    honk(): void {
      console.log('beep');
    }
  }

  export class Car extends Vehicle {
    drive(): void {
      console.log('vroom');
    }
  }

  export const car = new Car();
}

{
  const car = new ClassesInstanceMethodModifiers.Car();
  car.drive();
  car.honk();
}
