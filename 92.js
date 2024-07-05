/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  if (left === right) return head;

  const fakeHead = new ListNode(-1, head);

  let curr = fakeHead;

  // 寻址
  let reverseHeadPrev = null;
  let reverseHead = null;
  let reverseEnd = null;
  let reverseEndAfter = null;
  let i = 0;
  while (curr) {
    if (i === left - 1) {
      // 前驱节点
      reverseHeadPrev = curr;
    } else if (i === left) {
      // 反转的头节点
      reverseHead = curr;
    } else if (i === right) {
      // 反转的尾节点
      reverseEnd = curr;
    } else if (i === right + 1) {
      // 后驱节点
      reverseEndAfter = curr;
      break;
    }

    curr = curr.next;
    i += 1;
  }

  // 反转
  let rPrve = null;
  let rCurr = reverseHead;
  let rNext = rCurr.next;
  while (rCurr !== reverseEndAfter) {
    rNext = rCurr.next;
    if (rPrve) {
      rCurr.next = rPrve;
    } else {
      rCurr.next = null;
    }
    rPrve = rCurr;
    rCurr = rNext;
  }

  // 连接
  reverseHeadPrev.next = reverseEnd;
  reverseHead.next = reverseEndAfter;

  // 返回结果
  return fakeHead.next;
};
