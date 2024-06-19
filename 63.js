/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m).fill(new Array(n).fill(-1));

  if (obstacleGrid[0][0]) {
    dp[0][0] = 0;
  } else {
    dp[0][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0]) {
      dp[i][0] = 0;
      continue;
    }
    if (dp[i - 1][0] === 0) {
      dp[i][0] = 0;
      continue;
    }
    dp[i][0] = 1;
  }

  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0][j]) {
      dp[0][j] = 0;
      continue;
    }
    if (dp[0][j - 1] === 0) {
      dp[0][j] = 0;
      continue;
    }
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
        continue;
      }
      if (dp[i - 1][j] === 0) {
        dp[i][j] = dp[i][j - 1];
        continue;
      }
      if (dp[i][j - 1] === 0) {
        dp[i][j] = dp[i - 1][j];
        continue;
      }

      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
