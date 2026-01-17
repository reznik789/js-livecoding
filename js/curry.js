/**
 * @param {Function} fn
 * @return {Function}
 */
function curry(fn) {
  return function curried(...args) {
    const that = this;
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...nextArgs) {
      return curried.apply(that, [...args, ...nextArgs]);
    };
  };
}

// Пример 1:
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
console.log(curriedSum(1, 2, 3)); // 6

// Пример 2:
function multiply(a, b, c, d) {
  return a * b * c * d;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)(5)); // 120
console.log(curriedMultiply(2, 3)(4, 5)); // 120
console.log(curriedMultiply(2)(3, 4, 5)); // 120
