'use strict';

function makeDeepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    throw new Error();
  }

  let objCopy;

  if (Array.isArray(obj)) {
    objCopy = [];
  } else {
    objCopy = {};
  }

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        objCopy[key] = makeDeepCopy(obj[key]);
      } else if (Array.isArray(obj[key])) {

        objCopy[key] = obj[key].map((item) => {
          if (typeof item === 'object') {
            return makeDeepCopy(item);
          } else {
            return item;
          }
        });
      } else {
        objCopy[key] = obj[key];
      }
    }
  }

  return objCopy;
}

function selectFromInterval(arr, firstIntValue, secondIntValue) {
  if (!Array.isArray(arr) || arr.some(isNaN) || arr.some(el => typeof el !== 'number') ||
    isNaN(firstIntValue) || isNaN(secondIntValue) || arr.length === 0) {
    throw new Error();
  }

  const start = Math.min(firstIntValue, secondIntValue);
  const end = Math.max(firstIntValue, secondIntValue);

  const resultArr = arr.filter((el) => el >= start && el <= end);

  return resultArr;
}

