/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  function isCallback(str) {
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  const reg = /^[a-z]$/i;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (reg.test(char)) {
      str = str + char.toLowerCase();
    }
  }
  return isCallback(str);
};
