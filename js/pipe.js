const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

/**
 * @param {Function[]} funcs
 */
const pipe = (funcs) => {
  return (...args) => {
    return funcs.reduce(
      (acc, func, idx) => func.apply(null, idx === 0 ? acc : [acc]),
      args
    );
  };
};

const calculationOne = pipe([times(2), plus(3), times(3)]);

console.log(calculationOne(3));

// ...

const calculationTwo = pipe([times(2), plus(3), subtract(1)]);

console.log(calculationTwo(3));
