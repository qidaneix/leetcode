/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 插入排序
var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    const item = nums[i];
    let j = i - 1;
    while (j >= 0) {
      if (nums[j] > item) {
        nums[j + 1] = nums[j];
        j -= 1;
      } else {
        nums[j + 1] = item;
        break;
      }
    }
    if (j === -1) {
      nums[0] = item;
    }
  }
  return nums;
};
