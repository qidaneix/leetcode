/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  if (target === 0 || len === 0) {
    return 0;
  }

  let minLen = Infinity;
  let start = 0;
  let end = 1;
  let sum = 0;
  while (end <= len) {
    sum += nums[end - 1];

    if (sum >= target) {
      let subLen = end - start;
      if (subLen < minLen) {
        minLen = subLen;
      }

      while (start < end) {
        start += 1;
        sum -= nums[start - 1];

        if (sum >= target) {
          let subLen = end - start;
          if (subLen < minLen) {
            minLen = subLen;
          }
        } else {
          break;
        }
      }
    }

    end += 1;
  }

  return Number.isFinite(minLen) ? minLen : 0;
};
