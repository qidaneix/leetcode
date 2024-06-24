/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      // 左侧，入栈
      stack.unshift(char);
    } else {
      const preChar = stack.shift();
      if (char !== map.get(preChar)) {
        return false;
      }
    }
  }

  if (stack.length) return false;

  return true;
};
