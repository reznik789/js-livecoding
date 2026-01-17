/* Задача: Реализация функции get
Реализуйте функцию get, которая принимает объект и строковый путь.
Функция должна возвращать значение, находящееся по заданному пути в объекте,
или undefined, если такого пути не существует
const obj = { a: { b: { c: 3 } } };
get(obj, 'a.b.c'); // => 3
get(obj, 'a.b.x'); // => undefined
*/

/**
 * Возвращает значение, находящееся по заданному строковому пути в объекте.
 *
 * @param {Object} object - Объект, из которого нужно получить значение.
 * @param {string} path - Путь к значению в объекте, представленный строкой, где каждая часть пути разделена точкой (например, "a.b.c").
 * @returns {*} Значение, находящееся по указанному пути в объекте, или `undefined`, если путь не существует.
 */
function get(object, path) {
  if (path === "") return undefined;
  const traverse = (object, arrayPath) => {
    if (arrayPath.length === 1) {
      return object[arrayPath[0]];
    }
    const [first, ...rest] = arrayPath;
    if (object[first] === undefined) return undefined;
    return traverse(object[first], rest);
  };
  return traverse(object, path.split("."));
}

const obj = { a: { b: { c: 3 } }, x: { y: { z: 10 } } };

console.log(get(obj, "a.b.c")); // => 3
console.log(get(obj, "a.b")); // => { c: 3 }
console.log(get(obj, "a.b.x")); // => undefined
console.log(get(obj, "x.y.z")); // => 10
console.log(get(obj, "x.y")); // => { z: 10 }
console.log(get(obj, "x.y.a")); // => undefined
