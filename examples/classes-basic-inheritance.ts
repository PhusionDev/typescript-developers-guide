namespace ClassesBasicInheritance {
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
}

{
  const car = new ClassesBasicInheritance.Car();
  car.drive();
  car.honk();
}
