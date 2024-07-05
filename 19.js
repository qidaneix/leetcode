/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null;

  let i = 0;
  let j = i - n + 1;
  let curr = head;

  let nodeToDeletePrev = null;
  let nodeToDelete = j === 0 ? head : null;
  let nodeToDeleteNext = nodeToDelete ? nodeToDelete.next : null;

  while (curr.next) {
    curr = curr.next;
    i += 1;

    j = i - n + 1;
    if (j === 0) {
      nodeToDelete = head;
      nodeToDeleteNext = nodeToDelete.next;
    } else if (j > 0) {
      nodeToDeletePrev = nodeToDelete;
      nodeToDelete = nodeToDelete.next;
      nodeToDeleteNext = nodeToDelete.next;
    }
  }

  // 删除
  if (!nodeToDeletePrev) {
    return nodeToDeleteNext;
  }
  nodeToDeletePrev.next = nodeToDeleteNext;
  return head;
};
