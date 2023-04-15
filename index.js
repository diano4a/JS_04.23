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
