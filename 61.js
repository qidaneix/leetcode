/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head;

  let lastNode = head;
  let sum = 1;
  while (lastNode.next) {
    lastNode = lastNode.next;
    sum += 1;
  }

  const realK = k % sum;
  lastNode.next = head;
  let curr = head;
  const targetIndex = sum - realK - 1;
  let i = 0;
  let newHead;
  while (curr) {
    if (i === targetIndex) {
      newHead = curr.next;
      curr.next = null;
      break;
    } else {
      curr = curr.next;
      i += 1;
    }
  }
  return newHead;
};
