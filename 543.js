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
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxCount = 0;
  function backTracking(node) {
    if (!node) return 0;

    const lCount = backTracking(node.left);
    const rCount = backTracking(node.right);

    const count = lCount + rCount + 1;
    if (count > maxCount) {
      maxCount = count;
    }

    return Math.max(lCount, rCount) + 1;
  }
  backTracking(root);
  return maxCount - 1;
};
