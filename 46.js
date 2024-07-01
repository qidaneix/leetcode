/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length;
  const result = [];

  function backTracking(arr, indexArr) {
    if (arr.length === len) {
      // 返回结果，中止递归
      result.push(arr);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!indexArr.includes(i)) {
        backTracking([...arr, nums[i]], [...indexArr, i]);
      }
    }
  }

  backTracking([], []);
  return result;
};
