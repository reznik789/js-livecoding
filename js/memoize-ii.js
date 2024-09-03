/* Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice
with the same inputs. Instead it will return a cached value.
fn can be any function and there are no constraints on what
type of values it accepts. Inputs are considered identical if they
are === to each other. */

/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cashe = new Map();
  const resSym = Symbol("result");
  const callAndCashe = (...args) => {
    const res = fn(...args);
    let map = cashe;
    for (let i = 0; i < args.length; i += 1) {
      if (!map.has(args[i])) map.set(args[i], new Map());
      map = map.get(args[i]);
    }
    map.set(resSym, res);
    return res;
  };
  return function (...args) {
    let map = cashe;
    for (let i = 0; i < args.length; i += 1) {
      if (!map.has(args[i])) return callAndCashe(...args);
      map = map.get(args[i]);
    }
    return map?.has(resSym) ? map.get(resSym) : callAndCashe(...args);
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
