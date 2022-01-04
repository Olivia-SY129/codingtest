# Merge Two Sorted Lists

LeetCode  
레벨 Easy
링크: https://leetcode.com/problems/merge-two-sorted-lists/

## 풀이시간

40분

## 풀이과정

1. 각자의 list를 순회하면서 작은 값부터 새로운 링크드 리스트에 넣는다.
2. 재귀 함수

## 후기

간단한 문제였지만 중복되는 부분이 많아 아쉽다. 다시 풀 땐 겹치는 부분을 최소화 해야겠다.
재귀로 푸는 방법을 떠올리기 힘들었다.

</br>
</br>
</br>

---

# Reverse Linked List

LeetCode  
레벨 Easy  
링크: https://leetcode.com/problems/reverse-linked-list/

## 풀이시간

10분

## 풀이과정

리스트를 배열로 바꾸어 배열의 뒤부터 pop 하면서 새 리스트에 넣는다.

## 후기

배열을 사용하지 않고 링크드 리스트만으로 푸는 방법도 있다. 다만 속도는 비슷하다.

</br>
</br>
</br>

---

# Add Two Numbers

LeetCode  
레벨 Medium  
링크: https://leetcode.com/problems/add-two-numbers/

## 풀이시간

40분

## 풀이과정

전가산기 구현 문제. 새 리스트에 두 자리수를 합한 값의 나머지를 넣고 몫은 nextDigit에 저장하여 다음 node.next.val에 포함한다.

## 후기

어려운 문제는 아니었지만 if 조건을 잘못 지정해서 한참 헤맸다.
