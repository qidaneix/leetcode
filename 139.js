/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  let isOk = false;
  /**
        index 遍历起点
     */
  function backTracking(index) {
    if (index === s.length) {
      isOk = true;
      return;
    }
    for (let i = index + 1; i <= s.length; i++) {
      const subString = s.substring(index, i);
      if (wordSet.has(subString)) {
        // 包含子串
        backTracking(i);
      }
    }
  }
  backTracking(0);
  return isOk;
};
