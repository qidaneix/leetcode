// 快速排序
var sortArray = function (nums) {
  function exchange(nums, x, y) {
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  }

  function find(nums, left, right) {
    let i = left;
    let j = right;
    while (i < j) {
      while (i < j && nums[j] >= nums[left]) {
        j -= 1;
      }
      while (i < j && nums[i] <= nums[left]) {
        i += 1;
      }
      exchange(nums, i, j);
    }
    exchange(nums, i, left);
    return i;
  }

  function sort(nums, left, right) {
    if (left >= right) {
      return;
    }
    const p = find(nums, left, right);
    sort(nums, left, p - 1);
    sort(nums, p + 1, right);
  }

  sort(nums, 0, nums.length - 1);
  return nums;
};
