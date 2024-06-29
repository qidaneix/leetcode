/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i]，以i为结尾的连续子数组的最大和
  const len = nums.length;
  const dp = new Array(len);

  dp[0] = nums[0];
  let result = dp[0];
  for (let i = 1; i < len; i++) {
    dp[i] = dp[i - 1] <= 0 ? nums[i] : dp[i - 1] + nums[i];
    if (result < dp[i]) {
      result = dp[i];
    }
  }
  return result;
};
