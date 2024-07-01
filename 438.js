/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 低性能
var findAnagrams = function (s, p) {
  const pSorted = [...p].sort().join("");
  const len = pSorted.length;
  function isMatch(str) {
    if (str.length !== len) {
      return false;
    }
    const strSorted = [...str].sort().join("");
    if (strSorted !== pSorted) {
      return false;
    }
    return true;
  }

  let result = [];
  for (i = 0; i < s.length; i++) {
    const subString = s.substring(i, len + i);
    if (isMatch(subString)) {
      result.push(i);
    }
  }

  return result;
};
