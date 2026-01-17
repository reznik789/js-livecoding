/**
 * @param {Function[]} funcs
 */
const compose = (funcs) => {
  return (...args) => {
    if (funcs.length === 0) return args[0];
    return funcs.reduceRight(
      (acc, func, idx) =>
        func.apply(null, idx === funcs.length - 1 ? acc : [acc]),
      args
    );
  };
};

const times2 = (x) => x * 2;
const plus3 = (x) => x + 3;
const minus5 = (x) => x - 5;

const fn1 = compose([times2, plus3, minus5]);
console.log(fn1(10)); // 16

// Пример 2:
const fn2 = compose([minus5, plus3, times2]);
console.log(fn2(10)); // 18
// Выполнение: times2(10) = 20 → plus3(20) = 23 → minus5(23) = 18

// Пример 3 (пустой массив):
const identity = compose([]);
console.log(identity(42)); // 42

// Пример 4 (одна функция):
const fn3 = compose([times2]);
console.log(fn3(5)); // 10
