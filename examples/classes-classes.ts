namespace ClassesClasses {
  export class Vehicle {
    drive(): void {
      console.log('chugga chugga');
    }

    honk(): void {
      console.log('beep');
    }
  }
}

{
  const vehicle = new ClassesClasses.Vehicle();
  vehicle.drive();
  vehicle.honk();
}
