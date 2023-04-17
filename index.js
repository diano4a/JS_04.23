'use strict';

function curry(func) {
  const arity = func.length;

  return function curried(...args) {
    if (arity <= args.length) {
      return func(...args);
    } else {
      return function (...otherArgs) {
        return curried(...args.concat(otherArgs));
      };
    }
  };

}

class Calculator {
  constructor(X, Y) {
    if (arguments.length !== 2|| typeof X !== 'number' || typeof Y !== 'number' || isNaN(X) || isNaN(Y)) {
      throw new Error('');
    }
    this.X = X;
    this.Y = Y;
    this.getSum = this.getSum.bind(this);
    this.getMul = this.getMul.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getDiv = this.getDiv.bind(this);
  }

  setX(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('');
    }
    this.X = num;
  }

  setY(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('');
    }
    this.Y = num;
  }

  getSum() {
    return this.X + this.Y;
  }

  getMul() {
    return this.X * this.Y;
  }

  getSub() {
    return Math.abs(this.X - this.Y);
  }

  getDiv() {
    if (this.Y === 0) {
      throw new Error('');
    }
    
    return this.X / this.Y;
  }
}

class RickAndMorty {
  constructor() {
    this.API_URL = 'https://rickandmortyapi.com/api/';
  }

  getCharacter(charId) {
    const url = `${this.API_URL}character/${charId}`;

    return fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .catch((error) => {
        throw new Error('');
      });
  }

  async getEpisode(episodeId) {
    const url = `${this.API_URL}episode/${episodeId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('');
    }
  }
}