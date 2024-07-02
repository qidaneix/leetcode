/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxDistance = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (maxDistance >= i) {
      maxDistance = Math.max(maxDistance, i + nums[i]);
      if (maxDistance >= len - 1) return true;
    }
  }
  return false;
};
