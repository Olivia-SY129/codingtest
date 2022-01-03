/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];

  if (!head) return true;

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const len = arr.length;

  for (let i = 0; i < len / 2 + 1; i++) {
    if (arr[i] !== arr[len - 1 - i]) return false;
  }

  return true;
};
