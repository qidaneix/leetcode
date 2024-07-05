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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let result = 1;
  function backTracking(node, count) {
    if (count > result) {
      result = count;
    }
    if (node.left) {
      backTracking(node.left, count + 1);
    }
    if (node.right) {
      backTracking(node.right, count + 1);
    }
  }
  backTracking(root, 1);

  return result;
};
