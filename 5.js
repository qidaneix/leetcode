/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;

  let result = "";

  function getMax(pre, x, y) {
    if (x < 0 || y > len - 1 || s[x] !== s[y]) {
      if (pre.length > result.length) {
        result = pre;
      }
      return;
    }
    getMax(s[x] + pre + s[y], x - 1, y + 1);
  }

  for (let i = 0; i < len; i++) {
    getMax(s[i], i - 1, i + 1);

    if (s[i] === s[i + 1]) {
      getMax(s[i] + s[i + 1], i - 1, i + 2);
    }
  }

  return result;
};
