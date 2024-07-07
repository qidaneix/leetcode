/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;

  const fakeHead = new ListNode(Number.MIN_SAFT_INTGER, head);
  let firstLargerNode = null;
  let prveFristLargerNode = null;
  let prev = fakeHead;
  let curr = head;
  while (curr) {
    if (curr.val >= x && !prveFristLargerNode) {
      prveFristLargerNode = prev;
      firstLargerNode = curr;

      prev = curr;
      curr = curr.next;
    } else if (curr.val < x && prveFristLargerNode) {
      let currNext = curr.next;

      prveFristLargerNode.next = curr;
      curr.next = firstLargerNode;
      prveFristLargerNode = curr;

      if (currNext) {
        prev.next = currNext;
        curr = currNext;
        continue;
      } else {
        prev.next = null;
        break;
      }
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return fakeHead.next;
};
