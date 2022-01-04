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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  const first = new ListNode(0);
  const second = new ListNode(0);

  let node1 = first;
  let node2 = second;
  let isOdd = 1;

  while (head) {
    const nextNode = new ListNode();
    if (isOdd) {
      node1.val = head.val;

      if (head.next && head.next.next) {
        node1.next = nextNode;
        node1 = node1.next;
      }

      head = head.next;
      isOdd = 0;
    } else {
      node2.val = head.val;

      if (head.next && head.next.next) {
        node2.next = nextNode;
        node2 = node2.next;
      }

      head = head.next;
      isOdd = 1;
    }
  }

  node1.next = second;

  return first;
};

var oddEvenList2 = function (head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    [odd.next, even.next] = [odd.next.next, even.next.next];
    [odd, even] = [odd.next, even.next];
  }

  odd.next = evenHead;

  return head;
};
