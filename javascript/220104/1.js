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
  const result = new ListNode();

  if (!list1 || !list2) {
    if (!list1 && !list2) {
      return list1;
    } else if (!list1) return list2;
    else return list1;
  }

  let node1 = list1;
  let node2 = list2;
  let currNode = result;

  while (node1 || node2) {
    const nextNode = new ListNode();

    if (node1 && node2) {
      if (node1.val <= node2.val) {
        currNode.val = node1.val;
        node1 = node1.next;
      } else if (node1 || node1.val > node2.val) {
        currNode.val = node2.val;
        node2 = node2.next;
      }
    } else if (!node2) {
      currNode.val = node1.val;
      node1 = node1.next;
    } else if (!node1) {
      currNode.val = node2.val;
      node2 = node2.next;
    }

    if (node1 || node2) {
      currNode.next = nextNode;
      currNode = currNode.next;
    }
  }

  return result;
};

// 재귀 함수
var mergeTwoLists2 = function (list1, list2) {
  if (!list1 || (list2 && list1.val > list2.val)) {
    [list1, list2] = [list2, list1];
  }

  if (list1) {
    list1.next = mergeTwoLists2(list1.next, list2);
  }

  return list1;
};
