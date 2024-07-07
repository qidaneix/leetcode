/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  function isCallback(str) {
    if (str.length <= 1) return true;

    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
  }

  const len = s.length;
  const result = [];

  if (!len) return [];

  // index: 起始索引
  function backTracking(arr, index) {
    if (index >= len) {
      result.push(arr);
    }

    for (let i = index + 1; i <= len; i++) {
      const subString = s.substring(index, i);
      if (isCallback(subString)) {
        backTracking([...arr, subString], i);
      }
    }
  }
  backTracking([], 0);

  return result;
};
