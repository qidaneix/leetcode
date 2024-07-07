/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const thisLevelLen = queue.length;
    const thisArr = [];
    for (let i = 0; i < thisLevelLen; i++) {
      const node = queue.shift();
      thisArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(thisArr);
  }
  return result;
};
