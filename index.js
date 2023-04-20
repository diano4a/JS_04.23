'use strict';

class Stack {
  constructor(limit = 10) {
    if (typeof limit !== 'number' || isNaN(limit) || !Number.isInteger(limit) || limit <= 0) {
      throw new Error('Invalid limit value');
    }

    this.limit = limit;
    this.stack = new Array(limit);
    this.size = 0;
  }

  push(elem) {
    if (this.size === this.limit) {
      throw new Error('Limit exceeded');
    }
    
    this.stack[this.size] = elem;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('Empty stack');
    }

    const el = this.stack[this.size - 1];
    this.stack[this.size - 1] = undefined;
    this.size--;
    return el;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }
    
    return this.stack[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const newArr = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.stack[i];
    }

    return newArr;
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error('Not iterable');
    }

    let count = 0;
    for (let el of iterable) {
      count++;
    }
    const stack = new Stack(count);
    const iterator = iterable[Symbol.iterator]();
    for (let i = 0; i < count; i++) {
      stack.push(iterator.next().value);
    }
    return stack;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(elem) {
    const newNode = { value: elem, next: null };
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(elem) {
    const newNode = { value: elem, next: null };
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  find(elem) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === elem) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  toArray() {
    const arr = [];
    let arrSize = 0;
    let currentNode = this.head;
    while (currentNode) {
      arr[arrSize] = currentNode.value;
      arrSize++;
      currentNode = currentNode.next;
    }
    return arr;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    }
    const linkedList = new LinkedList();
    for (const el of iterable) {
      linkedList.append(el);
    }
    return linkedList;
  }

}

class Car {
  #brand = '';
  #model = '';
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (typeof value !== 'string' || value.trim().length < 1 || value.trim().length > 50) {
      throw new Error('Invalid brand name');
    }
    this.#brand = value.trim();
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (typeof value !== 'string' || value.trim().length < 1 || value.trim().length > 50) {
      throw new Error('Invalid model name');
    }
    this.#model = value.trim();
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    const currentYear = new Date().getFullYear();
    if (typeof value !== 'number' || !Number.isInteger(value) || isNaN(value) || value < 1950 || value > currentYear) {
      throw new Error('Invalid year of manufacturing');
    }
    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (typeof value !== 'number' || !Number.isInteger(value) || isNaN(value) || value < 100 || value > 330) {
      throw new Error('Invalid max speed');
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (typeof value !== 'number' || !Number.isInteger(value) || isNaN(value) || value < 20 || value > 100) {
      throw new Error('Invalid max fuel volume');
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number' || !Number.isInteger(value) || isNaN(value) || value <= 0) {
      throw new Error('Invalid fuel consumption');
    }
    this.#fuelConsumption = value;
  }

  get damage() {
    return this.#damage;
  }

  set damage(value) {
    if (typeof value !== 'number' || !Number.isInteger(value) || isNaN(value) || value < 1 || value > 5) {
      throw new Error('Invalid damage');
    }
    this.#damage = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  get health() {
    return this.#health;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Car has already started');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Car hasn't started yet");
    }
    this.#isStarted = false;
  }

  fillUpGasTank(fuelAmount) {
    if (typeof fuelAmount !== 'number' || isNaN(fuelAmount) || !Number.isInteger(fuelAmount) || fuelAmount <= 0) {
      throw new Error('Invalid fuel amount');
    }
    if (this.#isStarted) {
      throw new Error('You have to shut down your car first')
    }
    if (this.#currentFuelVolume + fuelAmount > this.#maxFuelVolume) {
      throw new Error('Too much fuel');
    }
    this.#currentFuelVolume + fuelAmount;
  }

  drive(speed, duration) {
    if (typeof speed !== 'number' || isNaN(speed) || !Number.isInteger(speed) || speed <= 0) {
      throw new Error('Invalid speed');
    }
    if (typeof duration !== 'number' || isNaN(duration) || !Number.isInteger(duration) || duration <= 0) {
      throw new Error('Invalid duration');
    }
    if (speed > this.#maxSpeed) {
      throw new Error("Car can't go this fast")
    }
    if (!this.#isStarted) {
      throw new Error('You have to start your car first');
    }
    const fuelNeeded = this.#fuelConsumption * speed * duration;
    if (fuelNeeded > this.currentFuelVolume) {
      throw new Error("You don't have enough fuel")
    }
    const healthNeeded = this.#damage * speed * duration;
    if (healthNeeded > this.#health) {
      throw new Error("Your car won’t make it");
    }
    this.#currentFuelVolume -= fuelNeeded;
    this.#health -= healthNeeded;
    this.#mileage += speed * duration;
  }

  repair() {
    if (this.isStarted) {
      throw new Error('You have to shut down your car first');
    }
    if (this.currentFuelVolume !== this.#maxFuelVolume) {
      throw new Error('You have to fill up your gas tank first');
    }
    this.#health = 100;
  }

  getFullAmount() {
    return this.#maxFuelVolume - this.#currentFuelVolume;
  }
}