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
var swapPairs = function (head) {
  const root = new ListNode(null);
  let prev = root;
  prev.next = head;

  let b;

  while (head && head.next) {
    b = head.next;
    head.next = b.next;
    b.next = head;

    prev.next = b;

    head = head.next;
    prev = prev.next.next;
  }

  return root.next;
};

var swapPairs2 = function (head) {
  if (head && head.next) {
    let p = head.next;
    head.next = swapPairs(p.next);
    p.next = head;
    return p;
  }
  return head;
};
