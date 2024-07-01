/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function backTracking(pre, leftNum, rightNum) {
    if (pre.length > 2 * n || leftNum < rightNum || leftNum > n) {
      return;
    }
    if (pre.length === 2 * n && leftNum === rightNum) {
      result.push(pre);
      return;
    }

    backTracking(pre + ")", leftNum, rightNum + 1);
    backTracking(pre + "(", leftNum + 1, rightNum);
  }

  backTracking("", 0, 0);
  return result;
};
