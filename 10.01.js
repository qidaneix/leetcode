/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  const lenA = A.length;
  const lenB = B.length;
  let i = 0; // A的指针
  let j = 0; // B的指针
  while (j < lenB) {
    while (i < lenA) {
      if (A[i] === 0) {
        A[i] = B[j];
        j += 1;
        i += 1;
      } else if (B[j] <= A[i]) {
        A.pop();
        A.splice(i, 0, B[j]);
        j += 1;
        i += 1;
      } else {
        i += 1;
      }
    }
  }
};
