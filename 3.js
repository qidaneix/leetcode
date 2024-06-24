/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len === 0) {
    return 0;
  }

  let maxLen = 0;
  const set = new Set();
  let start = 0;
  let end = 1;
  while (end <= len) {
    const char = s[end - 1];
    if (set.has(char)) {
      // 已重复
      while (start < end) {
        start += 1;
        const sChat = s[start - 1];
        set.delete(sChat);
        if (!set.has(char)) {
          break;
        }
      }
    }
    // 无重复
    set.add(char);
    if (maxLen < set.size) {
      maxLen = set.size;
    }
    end += 1;
  }
  return maxLen;
};
