/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length + 1;
  const dp = new Array(len).fill(0);

  dp[0] = 0;
  dp[1] = 0;
  dp[2] = Math.min(cost[0], cost[1]);
  for (let i = 3; i < len; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[len - 1];
};
