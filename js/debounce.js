/**
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    const that = this;
    timer = setTimeout(() => {
      timer = null;
      fn.call(that, ...args);
    }, delay);
  };
}

let counter = 0;
const increment = () => {
  counter++;
  console.log(counter);
};

const debouncedIncrement = debounce(increment, 100);

debouncedIncrement(); // ничего не выводится
debouncedIncrement(); // ничего не выводится
debouncedIncrement(); // через 100мс выведется: 1

setTimeout(() => {
  debouncedIncrement(); // через 100мс после этого вызова выведется: 2
}, 200);
