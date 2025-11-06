"use strict"

class Car {

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  info() {
     return `Авто: ${this.brand} ${this.model}, ${this.year} року.`;
  }

}

class ElectricCar extends Car {
  constructor(brand, model, year, battery) {
    super(brand, model, year);
    this.battery = battery;
  }

  charge() {
    return `${this.brand} ${this.model} заряджається... Батарея: ${this.battery} kWh`;
  }
}

const output3 = document.querySelector('#task3-output');
const output4 = document.querySelector('#task4-output');

const car1 = new Car('Toyota', 'SE034', 1999);
output3.textContent = car1.info();

const tesla = new ElectricCar("Tesla", "Model 3", 2022, 75);
output4.insertAdjacentHTML('beforeend', `${tesla.info()} <br> ${tesla.charge()}`);


class MathHelper {
  static add(a, b) {
    return a + b;
  }
  
  static sub(a, b) {
    return a - b;
  }
}

const output51 = document.querySelector('#task5-output1');
const output52 = document.querySelector('#task5-output2');

output51.textContent = MathHelper.add(12, 3);
output52.textContent = MathHelper.sub(7, 1);