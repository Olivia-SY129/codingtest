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
  const result = new ListNode(0);
  let node = result;

  let nextDigit = 0;

  while (l1 || l2 || nextDigit) {
    let sum = nextDigit;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    nextDigit = Math.floor(sum / 10);
    node.val = sum % 10;

    if (l1 || l2 || nextDigit) {
      node.next = new ListNode();
      node = node.next;
    }
  }

  return result;
};
