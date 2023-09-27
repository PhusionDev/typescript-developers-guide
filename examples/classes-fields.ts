{
  class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
      console.log('beep');
    }
  }

  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
}
