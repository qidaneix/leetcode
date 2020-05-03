/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let x = matrix[0].length;
  let y = matrix.length;
  for (let i = 0; i < x; i++) {
    matrix.push([]); // y ~ y+x
  }
  for (let i = 0; i < x; i++) {
    // 当前x坐标 = i
    // 新坐标yNew = y + i
    for (let j = y - 1; j >= 0; j--) {
      // 当前y坐标 = j
      // 新坐标xNew = y - 1 - j
      matrix[y + i][y - 1 - j] = matrix[j][i];
    }
  }
  for (let i = 0; i < y; i++) {
    matrix.shift();
  }
  return matrix;
};
