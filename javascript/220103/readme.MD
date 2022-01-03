# Trapping Rain Water

LeetCode  
레벨 Hard
링크: https://leetcode.com/problems/trapping-rain-water/

## 풀이시간

40분

## 풀이과정

투포인터를 이용하였다. 최대 높이 - 현재 높이 = 현재 인덱스의 부피임을 이용하여 부피 값을 누적했다.

## 후기

어려운 문제를 다시 풀어보았다. 여전히 오래 걸린다. 투포인터라는 유용한 알고리즘을 연습해볼 수 있었다.

</br>
</br>
</br>

---

# Two Sum

LeetCode  
레벨 Easy  
링크: https://leetcode.com/problems/two-sum/

## 풀이시간

5분

## 풀이과정

정답이 한 쌍이라는 것을 이용하여 빠르게 for 문을 종료하는 것이 키포인트.

## 후기

전에 봤던 문제여서 비교적 빠르게 문제 풀이를 할 수 있었다. 브루트 포스에 의존하지 않도록 노력하자.

</br>
</br>
</br>

---

# Array Partition I

LeetCode  
레벨 Easy  
링크: https://leetcode.com/problems/array-partition-i/

## 풀이시간

3분

## 풀이과정

문제 풀이 핵심인 min(a, b)의 결과값이 무엇인지 유추하여 풀어야 한다. 배열을 정렬하여 i=홀수인 값을 sum에 누적한다.

## 후기

쉬운 문제였다.

</br>
</br>
</br>

---

# Product of Array Except Self

LeetCode  
레벨 Medium
링크: https://leetcode.com/problems/product-of-array-except-self/

## 풀이시간

40분

## 풀이과정

나눗셈이 불가하므로 현재 인덱스의 전, 후의 곱을 구해야한다. 각각 구하여 배열에 곱한 값을 반환했다.

## 후기

어려운 문제는 아니지만 처음 떠오르는 나눗셈, 브루트 포스를 사용할 수 없다는 점에서 난이도가 있었다.
