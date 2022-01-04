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
  if (!head) return head;

  const arr = [];
  let node = head;

  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  const list = new ListNode();
  let curNode = list;

  while (arr.length) {
    const next = new ListNode();

    curNode.val = arr.pop();

    if (arr.length) {
      curNode.next = next;
      curNode = curNode.next;
    }
  }

  return list;
};
