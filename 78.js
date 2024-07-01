/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length;
  const result = [];

  function backTracking(arr, index) {
    // 中止条件
    if (arr.length > len) {
      return;
    }

    result.push(arr);

    for (let i = index; i < len; i++) {
      backTracking([...arr, nums[i]], i + 1);
    }
  }

  backTracking([], 0);

  return result;
};
