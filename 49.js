/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /**
        对每个字符串进行排序，生成新的字符串
        以新字符串结果为键，真实字符串数组为值
        如果匹配，则插入值中
        否则新建键值对
     */
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = [...strs[i]].toSorted().join("");
    if (map.has(sortedStr)) {
      const arr = map.get(sortedStr);
      arr.push(strs[i]);
    } else {
      const newArr = [strs[i]];
      map.set(sortedStr, newArr);
    }
  }
  return Array.from(map.values());
};
