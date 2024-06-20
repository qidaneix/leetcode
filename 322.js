/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 回溯
var coinChange1 = function (coins, amount) {
  let result = Infinity;

  function getSum(arr) {
    return arr.reduce((prev, item) => prev + item, 0);
  }

  function backTracking(item, index) {
    const sum = getSum(item);
    if (sum === amount) {
      if (item.length < result) {
        result = item.length;
      }
      return;
    }
    if (sum > amount) {
      return;
    }
    for (let i = index; i < coins.length; i++) {
      const newItem = [...item, coins[i]];
      backTracking(newItem, i);
    }
  }

  backTracking([], 0);

  return result === Infinity ? -1 : result;
};

// 动态规划
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//  动态规划
var coinChange2 = function (coins, amount) {
  // dp[i]表示总数为i时所需的最小硬币数量
  const dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    // 求dp[i]
    const mayPrevDp = coins
      .map((coin) => {
        if (i - coin < 0) {
          return false;
        }
        if (dp[i - coin] === -1) {
          return false;
        }
        return dp[i - coin];
      })
      .filter((i) => typeof i === "number");
    if (!mayPrevDp.length) dp[i] = -1;
    else dp[i] = Math.min(...mayPrevDp) + 1;
  }
  return dp[amount];
};
