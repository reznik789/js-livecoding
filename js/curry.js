function curry(fn) {
  const base = (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (...nextArgs) => base(...args, ...nextArgs);
    }
  };
  return base;
}

const sum = (a, b, c) => a + b + c;

console.log(curry(sum)(1, 2, 3));
console.log(curry(sum)(1)(2, 3));
console.log(curry(sum)(1, 2)(3));
console.log(curry(sum)(1)(2)(3));
console.log(curry(sum)(1, 2, 3, 4, 5, 6));
