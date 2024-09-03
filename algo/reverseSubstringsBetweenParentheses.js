// You are given a string s that consists of lower case English letters and brackets.
// Reverse the strings in each pair of matching parentheses, starting from the innermost one.
// Your result should not contain any brackets.

/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  let current = "";
  let prev = "";
  for (let char of s) {
    if (char === "(") {
      stack.push(current);
      current = "";
      continue;
    }
    if (char === ")") {
      prev = stack.pop();
      prev += reverseString(current);
      current = prev;
      continue;
    }
    current += char;
  }
  return current;
};
