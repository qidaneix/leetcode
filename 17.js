/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = new Map();
  map.set("2", ["a", "b", "c"]);
  map.set("3", ["d", "e", "f"]);
  map.set("4", ["g", "h", "i"]);
  map.set("5", ["j", "k", "l"]);
  map.set("6", ["m", "n", "o"]);
  map.set("7", ["q", "p", "r", "s"]);
  map.set("8", ["t", "u", "v"]);
  map.set("9", ["w", "x", "y", "z"]);

  const result = [];
  if (!digits) return result;
  function backTracking(prevStr, index) {
    const char = digits[index];
    if (!char) {
      result.push(prevStr);
      return;
    }
    const words = map.get(char);
    for (let i = 0; i < words.length; i++) {
      backTracking(prevStr + words[i], index + 1);
    }
  }
  backTracking("", 0);
  return result;
};
