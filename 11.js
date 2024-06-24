/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  function getArea(m, n) {
    const x = Math.abs(m.x - n.x);
    const y = Math.min(m.y, n.y);
    return x * y;
  }
  let result = 0;
  const len = height.length;
  let i = 0;
  let j = len - 1;
  while (i < j) {
    const m = {
      x: i,
      y: height[i],
    };
    const n = {
      x: j,
      y: height[j],
    };
    const area = getArea(m, n);
    if (area > result) {
      result = area;
    }
    if (m.y < n.y) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return result;
};
