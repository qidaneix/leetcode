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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  let result = true;
  function backTracking(left, right) {
    if (!result || (!left && !right)) return;

    if ((left && !right) || (!left && right) || left.val !== right.val) {
      result = false;
      return;
    }

    backTracking(left.right, right.left);
    backTracking(left.left, right.right);
  }
  backTracking(root.left, root.right);

  return result;
};
