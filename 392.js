/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (j === s.length) {
      return true;
    }
    if (t[i] === s[j]) {
      j++;
    }
  }
  if (j === s.length) {
    return true;
  }
  return false;
};
