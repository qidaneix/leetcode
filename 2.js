/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  function getSumObj(val1 = 0, val2 = 0, isOverflow) {
    const sumObj = {
      high: 0,
      low: 0,
    };
    const sum = val1 + val2 + isOverflow;
    if (sum > 9) {
      sumObj.high = 1;
      sumObj.low = sum - 10;
    } else {
      sumObj.low = sum;
    }
    return sumObj;
  }

  let isOverflow = 0;
  const result = new ListNode();
  let sumNode = result;
  let l1Node = l1;
  let l2Node = l2;
  while (true) {
    const val1 = l1Node?.val;
    const val2 = l2Node?.val;
    const sumObj = getSumObj(val1, val2, isOverflow);

    isOverflow = sumObj.high;

    sumNode.val = sumObj.low;

    l1Node = l1Node?.next;
    l2Node = l2Node?.next;

    if (l1Node || l2Node || isOverflow) {
      sumNode.next = new ListNode();
      sumNode = sumNode.next;
    } else {
      break;
    }
  }

  return result;
};
