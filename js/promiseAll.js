/**
 * @param {Promise[]} promises
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);
    const results = [];
    let counter = 0;
    const handler = (index) => (res) => {
      results[index] = res;
      counter += 1;
      if (counter === promises.length) resolve(results);
    };
    promises.forEach((promise, index) =>
      Promise.resolve(promise).then(handler(index)).catch(reject)
    );
  });
}

// Пример 1: все промисы успешны
const p1 = Promise.resolve(3);
const p2 = Promise.resolve(42);
const p3 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100));

promiseAll([p1, p2, p3]).then((results) => {
  console.log(results); // [3, 42, 'foo']
});

// Пример 2: один промис падает
const p4 = Promise.resolve(1);
const p5 = Promise.reject("Error!");
const p6 = Promise.resolve(3);

promiseAll([p4, p5, p6]).catch((error) => {
  console.log(error); // 'Error!'
});

// Пример 3: пустой массив
promiseAll([]).then((results) => {
  console.log(results); // []
});

// Пример 4: порядок результатов сохраняется
const p7 = new Promise((resolve) => setTimeout(() => resolve("slow"), 100));
const p8 = Promise.resolve("fast");

promiseAll([p7, p8]).then((results) => {
  console.log(results); // ['slow', 'fast'] - порядок как в массиве!
});

// Пример 5: не-промисы (обычные значения)
promiseAll([1, 2, Promise.resolve(3)]).then((results) => {
  console.log(results); // [1, 2, 3]
});
