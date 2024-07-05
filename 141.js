/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let node = head;
  while (node) {
    // 检查是否染色
    if (node.colored) {
      return true;
    }

    node.colored = true;
    node = node.next;
  }
  return false;
};
