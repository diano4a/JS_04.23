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

