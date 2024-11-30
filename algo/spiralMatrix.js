/*  Given an m x n matrix, return all elements of the matrix in spiral order. */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const res = [];
  if (matrix.length === 0) return res;
  const matrixLength = matrix.length * matrix[0].length;

  /**
   * @param {number} m
   * @param {number} n
   * @param {number} limitM
   * @param {number} limitN
   * @return {number[]}
   */
  const move = (
    m = 0,
    n = 0,
    limitM = matrix.length - 1,
    limitN = matrix[0].length - 1
  ) => {
    // Перемещение справа налево
    for (let i = n; i <= limitN && res.length < matrixLength; i++) {
      res.push(matrix[m][i]);
    }

    // Перемещение сверху вниз
    for (let i = m + 1; i <= limitM && res.length < matrixLength; i++) {
      res.push(matrix[i][limitN]);
    }

    // Перемещение справа налево
    for (let i = limitN - 1; i >= n && res.length < matrixLength; i--) {
      res.push(matrix[limitM][i]);
    }

    // Перемещение снизу вверх
    for (let i = limitM - 1; i > m && res.length < matrixLength; i--) {
      res.push(matrix[i][n]);
    }

    return res.length < matrixLength
      ? move(m + 1, n + 1, limitM - 1, limitN - 1)
      : res;
  };

  return move();
};

console.log("====================================");
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log("====================================");
