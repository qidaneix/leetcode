/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];

  function sum(arr) {
    return arr.reduce((prev, i) => prev + i, 0);
  }

  /**
        item 上一层数组
        index 索引启动位置
     */
  function backTracking(item, index) {
    if (sum(item) === n && item.length === k) {
      result.push(item);
      return;
    }
    if (sum(item) > n || item.length > k) {
      return;
    }

    for (let i = index; i < 10; i++) {
      const newItem = [...item, i];
      backTracking(newItem, i + 1);
    }
  }

  backTracking([], 1);

  return result;
};
