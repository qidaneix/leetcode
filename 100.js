/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  let result = true;
  function backTracking(nodeP, nodeQ) {
    if (
      (typeof nodeP?.val === "number" && typeof nodeQ?.val !== "number") ||
      (typeof nodeP?.val !== "number" && typeof nodeQ?.val === "number") ||
      nodeP?.val !== nodeQ?.val ||
      (nodeP.left && !nodeQ.left) ||
      (!nodeP.left && nodeQ.left) ||
      (nodeP.right && !nodeQ.right) ||
      (!nodeP.right && nodeQ.right)
    ) {
      result = false;
      return;
    }

    if (nodeP.left && nodeQ.left) {
      backTracking(nodeP.left, nodeQ.left);
    }
    if (nodeP.right && nodeQ.right) {
      backTracking(nodeP.right, nodeQ.right);
    }
  }
  backTracking(p, q);

  return result;
};
