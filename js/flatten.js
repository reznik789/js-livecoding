/**
 * @param {Object} obj
 * @return {Object}
 */
function flatten(obj) {
  const stack = [[obj, ""]];
  const res = {};
  while (stack.length > 0) {
    const [currItem, path] = stack.pop();
    if (
      currItem === null ||
      Array.isArray(currItem) ||
      typeof currItem !== "object"
    ) {
      res[path] = currItem;
    } else {
      for (let childKey in currItem) {
        stack.push([
          currItem[childKey],
          path === "" ? childKey : `${path}.${childKey}`,
        ]);
      }
    }
  }
  return res;
}
/**
 * @param {Object} obj
 * @return {Object}
 */
function flattenOld(obj) {
  const res = {};
  for (let key in obj) {
    if (
      typeof obj[key] !== "object" ||
      obj[key] === null ||
      Array.isArray(obj[key])
    ) {
      res[key] = obj[key];
      continue;
    }
    const childObj = flatten(obj[key]);
    Object.keys(childObj).forEach((childKey) => {
      res[`${key}.${childKey}`] = childObj[childKey];
    });
  }
  return res;
}

// Пример 1:
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};
console.log(flatten(obj1));
// { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

// Пример 2:
const obj2 = {
  x: {
    y: {
      z: 10,
    },
  },
  arr: [1, 2, 3],
  name: "test",
};
console.log(flatten(obj2));
// { 'x.y.z': 10, 'arr': [1, 2, 3], 'name': 'test' }

// Пример 3:
const obj3 = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
};
console.log(flatten(obj3));
// { 'a.b.c.d': 1 }
