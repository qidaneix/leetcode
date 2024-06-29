/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let result = 0;
  for (let i of numsSet) {
    if (!numsSet.has(i - 1)) {
      let currentNum = i;
      let currentLength = 1;

      while (numsSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      result = Math.max(result, currentLength);
    }
  }

  return result;
};
