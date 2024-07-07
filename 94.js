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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  if (!root) return result;

  function backTracking(node) {
    if (node.left) backTracking(node.left);
    result.push(node.val);
    if (node.right) backTracking(node.right);
  }
  backTracking(root);

  return result;
};
