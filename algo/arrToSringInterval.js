/*
 * Вход: массив чисел
 * Выход: Строка с диапазонами
 * Необходимо преобразовать полученный на вход массив в строку,
 * скомпонав соседние по числовому ряду числа в диапазоны.
 */
range([1, 4, 5, 2, 3, 9, 8, 11, 0]); // "0-5,8-9,11"
range([1, 4, 3, 2]); // "1-4"

/**
 *
 * @param {number[]} arr
 * @return {string}
 */
function range(arr) {
  arr.sort((a, b) => a - b);
  const intervals = [];
  let currInterval = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const compareWith = currInterval[1] ?? currInterval[0];
    if (arr[i] === compareWith + 1) {
      currInterval[1] = arr[i];
    } else {
      intervals.push(currInterval);
      currInterval = [arr[i]];
    }
  }
  intervals.push(currInterval);
  return intervals.map((interval) => interval.join("-")).join(",");
}

console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // "0-5,8-9,11"
