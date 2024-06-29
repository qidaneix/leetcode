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
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  if (typeof head?.val !== "number") return null;

  const result = new ListNode();
  let current = result;
  let p = head;
  let pre = null;
  while (p) {
    if (p.next) {
      pre = p;
      p = p.next;
    } else {
      current.val = p.val;
      if (pre) {
        current.next = new ListNode();
        current = current.next;
        pre.next = null;
        pre = null;
        p = head;
      } else {
        break;
      }
    }
  }
  return result;
};
