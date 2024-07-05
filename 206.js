/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;

  let curr = head;
  let prev = null;
  let next = head.next;

  while (curr) {
    next = curr.next;
    if (prev) {
      curr.next = prev;
    } else {
      curr.next = null;
    }
    prev = curr;
    curr = next;
  }

  return prev;
};
