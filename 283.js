/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  let sumOfZero = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0 && i + sumOfZero < len - 1) {
      sumOfZero += 1;
      nums.splice(i, 1);
      nums.push(0);
      i -= 1;
    }
  }
};
