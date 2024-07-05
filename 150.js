/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let token of tokens) {
    const num = parseInt(token);
    if (!Number.isNaN(num)) {
      stack.unshift(num);
    } else {
      const b = stack.shift();
      const a = stack.shift();
      let c;
      if (token === "+") {
        c = a + b;
      } else if (token === "-") {
        c = a - b;
      } else if (token === "*") {
        c = a * b;
      } else if (token === "/") {
        c = a / b;
      }
      stack.unshift(parseInt(c));
    }
  }
  return stack.shift();
};
