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
var deleteDuplicates = function (head) {
  if (!head) return head;

  let hasSame = false;
  let prev = null;
  let curr = head;
  while (true) {
    if (!curr.next && !hasSame) {
      break;
    } else if (!curr.next && hasSame) {
      if (prev) {
        prev.next = null;
      } else {
        head = null;
      }
      break;
    } else if (curr.val === curr.next.val) {
      // 开始统计
      hasSame = true;
      // prev不变
      curr = curr.next;
    } else if (curr.val !== curr.next.val && hasSame) {
      // 删除
      curr = curr.next;
      if (prev) {
        prev.next = curr;
      } else {
        head = curr;
      }
      // 恢复状态
      hasSame = false;
    } else if (curr.val !== curr.next.val && !hasSame) {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
