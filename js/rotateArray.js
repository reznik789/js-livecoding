/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 * Изменяет nums in-place
 */
// function rotate(nums, k) {
//   let counter = 0;
//   let startIndex = 0;
//   let index = 0;
//   let curItem = nums[index];

//   while (counter < nums.length) {
//     const nextIndex = (index + k) % nums.length;
//     const nextItem = nums[nextIndex];
//     nums[nextIndex] = curItem;
//     curItem = nextItem;
//     index = nextIndex;
//     counter++;

//     if (index === startIndex && counter < nums.length) {
//       startIndex++;
//       index = startIndex;
//       curItem = nums[index];
//     }
//   }
// }

function reversePart(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 * Изменяет nums in-place
 */
function rotate(nums, k) {
  k = k % nums.length;
  reversePart(nums, 0, nums.length - 1);
  reversePart(nums, 0, k - 1);
  reversePart(nums, k, nums.length - 1);
}

// Пример 1:
const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1); // [5, 6, 7, 1, 2, 3, 4]

// Пример 2:
const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2); // [3, 99, -1, -100]
