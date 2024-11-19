/* Given a string s, reverse the order of characters in each word
within a sentence while still preserving whitespace and initial word order. */

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => s.split(" ").map(reverseString).join(" ");
