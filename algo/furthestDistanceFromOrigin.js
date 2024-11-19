/* You are given a string moves of length n consisting only of characters 'L', 'R', and '_'.
The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:

move to the left if moves[i] = 'L' or moves[i] = '_'
move to the right if moves[i] = 'R' or moves[i] = '_'
Return the distance from the origin of the furthest point you can get to after n moves. */

/**
 * @param {string} moves
 * @return {number}
 */
const furthestDistanceFromOrigin = (moves) => {
  let left = 0;
  let right = 0;

  for (let currMove of moves) {
    if (currMove === "L") {
      left = left + 1;
      right = right - 1;
    } else if (currMove === "R") {
      right = right + 1;
      left = left - 1;
    } else if (currMove === "_") {
      left = left + 1;
      right = right + 1;
    }
  }
  return Math.max(left, right);
};
