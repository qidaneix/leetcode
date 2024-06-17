/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function getSum(arr) {
    return arr.reduce((prev, i) => prev + i, 0);
  }
  /**
        item 上一层数组
        index 索引起点，要包括上层的值
     */
  function backTracking(item, index) {
    const sum = getSum(item);
    if (sum === target) {
      result.push(item);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      const newItem = [...item, candidates[i]];
      backTracking(newItem, i);
    }
  }
  backTracking([], 0);
  return result;
};
