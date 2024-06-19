/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const methods = new Array();
  methods[0] = 1;
  methods[1] = 2;
  for (let i = 2; i < n; i++) {
    methods[i] = methods[i - 1] + methods[i - 2];
  }
  return methods[n - 1];
};
