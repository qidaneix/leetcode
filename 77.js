/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 回溯法
  const result = [];

  /**
        item: 上层元素(数组)
        x：遍历起点
     */
  function backTracking(item, x) {
    if (item.length === k) {
      result.push(item);
      return;
    }
    if (x > n) {
      return;
    }
    for (let i = x; i <= n; i++) {
      const newItem = [...item, i];
      backTracking(newItem, i + 1);
    }
  }

  backTracking([], 1);

  return result;
};
