/**
 * @param {number} n
 * @return {number}
 */

function markAsPrime(arr, min, num, max) {
  const nextMin = min * num;
  if (nextMin >= max) return arr;
  arr[nextMin] = false;
  return markAsPrime(arr, min + 1, num, max);
}

var countPrimes = function (n) {
  if (n < 2) return 0;
  let arr = Array.from({ length: n + 1 }).fill(true);
  arr[0] = arr[1] = false;
  let currPrime = 2;
  while (currPrime < n) {
    arr = markAsPrime(arr, currPrime, currPrime, n);
    currPrime = arr.findIndex((el, index) => el !== true && index > currPrime);
  }
  return arr.reduce((acc, el) => (acc + el ? 1 : 0), 0);
};

debugger;
console.log(countPrimes(10));
