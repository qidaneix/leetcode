/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  if (!list1 && !list2) return null;

  const result = new ListNode();
  let current = result;
  let node1 = list1;
  let node2 = list2;
  while (true) {
    if (node1 && node2) {
      if (node1.val < node2.val) {
        current.val = node1.val;
        node1 = node1.next;
      } else {
        current.val = node2.val;
        node2 = node2.next;
      }
    } else if (node1) {
      current.val = node1.val;
      node1 = node1.next;
    } else if (node2) {
      current.val = node2.val;
      node2 = node2.next;
    }

    if (node1 || node2) {
      current.next = new ListNode();
      current = current.next;
    } else {
      return result;
    }
  }

  return result;
};
