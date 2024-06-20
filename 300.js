/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    let maxPreDp = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] > maxPreDp) {
        maxPreDp = dp[j];
      }
    }

    dp[i] = maxPreDp + 1;
  }
  return Math.max(...dp);
};
