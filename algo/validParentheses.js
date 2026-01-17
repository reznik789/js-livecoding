/**
 * @param {string} str
 * @return {boolean}
 */
function isValid(str) {
  const stack = [];
  const openParenthesesMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closeParenthesesMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let char of str) {
    if (openParenthesesMap[char]) {
      stack.push(char);
    } else if (closeParenthesesMap[char]) {
      const stackChar = stack.pop();
      if (char !== openParenthesesMap[stackChar]) return false;
    }
  }
  return stack.length === 0;
}

// Пример 1:
console.log(isValid("()")); // true

// Пример 2:
console.log(isValid("()[]{}")); // true

// Пример 3:
console.log(isValid("(]")); // false

// Пример 4:
console.log(isValid("([)]")); // false (неправильный порядок)

// Пример 5:
console.log(isValid("{[]}")); // true

// Пример 6:
console.log(isValid("")); // true (пустая строка валидна)

// Пример 7:
console.log(isValid("(")); // false (нет закрывающей)

// Пример 8:
console.log(isValid("(((")); // false

// Пример 9:
console.log(isValid("))((")); // false
