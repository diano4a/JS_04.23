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
