/**
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
function deepEqual(a, b) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((val, index) => deepEqual(val, b[index]));
  } else if (typeof a === "object" && a !== null) {
    if (typeof b !== "object" || b === null || Array.isArray(b)) return false;
    const aKeys = Object.keys(a);
    return (
      aKeys.length === Object.keys(b).length &&
      Object.keys(a).every(
        (key) => b.hasOwnProperty(key) && deepEqual(a[key], b[key])
      )
    );
  }
  return a === b || (Number.isNaN(a) && Number.isNaN(b));
}

// Пример 1: примитивы
// console.log(deepEqual(1, 1)); // true
// console.log(deepEqual(1, 2)); // false
// console.log(deepEqual("hello", "hello")); // true

// Пример 2: объекты
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true (порядок не важен)
console.log(deepEqual({ a: 1 }, { a: 1, b: undefined })); // false

// Пример 3: вложенные объекты
console.log(deepEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 3 } } })); // true

// Пример 4: массивы
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([1, 2, 3], [1, 3, 2])); // false (порядок важен!)

// Пример 5: вложенные массивы
console.log(deepEqual([1, [2, 3]], [1, [2, 3]])); // true

// Пример 6: null и undefined
console.log(deepEqual(null, null)); // true
console.log(deepEqual(null, undefined)); // false

// Пример 7: смешанные структуры
console.log(
  deepEqual({ arr: [1, 2], obj: { x: 1 } }, { arr: [1, 2], obj: { x: 1 } })
); // true
