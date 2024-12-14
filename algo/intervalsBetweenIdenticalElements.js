/*
You are given a 0-indexed array of n integers arr.
The interval between two elements in arr is defined as the absolute difference between their indices. More formally, the interval between arr[i] and arr[j] is |i - j|.
Return an array intervals of length n where intervals[i] is the sum of intervals between arr[i] and each element in arr with the same value as arr[i].
Note: |x| is the absolute value of x.

Example 1:

Input: arr = [2,1,3,1,2,3,3]
Output: [4,2,7,2,4,4,5]
Explanation:
- Index 0: Another 2 is found at index 4. |0 - 4| = 4
- Index 1: Another 1 is found at index 3. |1 - 3| = 2
- Index 2: Two more 3s are found at indices 5 and 6. |2 - 5| + |2 - 6| = 7
- Index 3: Another 1 is found at index 1. |3 - 1| = 2
- Index 4: Another 2 is found at index 0. |4 - 0| = 4
- Index 5: Two more 3s are found at indices 2 and 6. |5 - 2| + |5 - 6| = 4
- Index 6: Two more 3s are found at indices 2 and 5. |6 - 2| + |6 - 5| = 5
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const getDistances = (arr) => {
  const res = [];
  const map = arr.reduce((acc, num, idx) => {
    if (acc[num] === undefined) {
      acc[num] = [idx];
      res[idx] = 0;
      return acc;
    } else {
      acc[num].forEach((otherIdx) => {
        res[otherIdx] += Math.abs(idx - otherIdx);
        res[idx] = res[otherIdx];
      });
      acc[num].push(idx);
    }

    return acc;
  }, {});
  return res;
  return Object.values(map).reduce((acc, idxArr) => {
    idxArr.forEach((idx, currIndex, arr) => {
      acc[idx] = 0;
      arr.forEach((otherIdx, index) => {
        if (currIndex === index) return;
        acc[idx] += Math.abs(idx - otherIdx);
      });
    });
    return acc;
  }, []);
};

console.log(getDistances([2, 1, 3, 1, 2, 3, 3]));
