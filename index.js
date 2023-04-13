'use strit';

Array.prototype.customFilter = function(callback, thisArg) {
  const arr = this;
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback.call(thisArg, arr[i], i, arr);
    if (result) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

