/*
You are given two arrays of equal length, nums1 and nums2.
Each element in nums1 has been increased
(or decreased in the case of negative) by an integer, represented by the variable x.
As a result, nums1 becomes equal to nums2.
Two arrays are considered equal when they contain the same integers with the same frequencies.
Return the integer x.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const addedInteger = (nums1, nums2) => {
  // first solution, not optimal becouse of sorting
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  return nums2[0] - nums1[0];
};

const addedInteger2 = (nums1, nums2) => {
  const min1 = Math.min(...nums1);
  const min2 = Math.min(...nums2);
  return min2 - min1;
};
