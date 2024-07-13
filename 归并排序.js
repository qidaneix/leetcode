// 归并排序
var sortArray = function (nums) {
  function merge(nums, left, mid, right) {
    const temArr = new Array(right - left + 1);
    let i = left;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= right) {
      if (nums[i] > nums[j]) {
        temArr[k] = nums[j];
        k += 1;
        j += 1;
      } else {
        temArr[k] = nums[i];
        k += 1;
        i += 1;
      }
    }
    while (i <= mid) {
      temArr[k] = nums[i];
      k += 1;
      i += 1;
    }
    while (j <= right) {
      temArr[k] = nums[j];
      k += 1;
      j += 1;
    }
    for (let l = left; l <= right; l++) {
      nums[l] = temArr[l - left];
    }
  }

  function split(nums, left, right) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    split(nums, left, mid);
    split(nums, mid + 1, right);

    merge(nums, left, mid, right);
  }

  split(nums, 0, nums.length - 1);
  return nums;
};
