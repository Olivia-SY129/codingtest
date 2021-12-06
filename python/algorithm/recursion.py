def factorial(data: int) -> int:
  if data <= 1:
    return data
  else: 
    data = data * factorial(data - 1)
    return data

print('factorial: ', factorial(6))

def sum_list(data: list[int]) -> int:
  if not data:
    return 'Empty list'
  elif len(data) == 1:
    return data[0]
  else:
    sum = data[0] + sum_list(data[1:])
    return sum

import random

lt = random.sample(range(100), 10)

print('sum_list: ', sum_list(lt))
print('sum: ', sum(lt))
    

def palindrome(text: str) -> bool:
  if len(text) <= 2:
    return True
  
  if text[0] == text[-1]:
    return palindrome(text[1:-2])
  else:
    return False
  

print('Palindrome: ', palindrome('strta'))


def func(n: int) -> int:
  print(n)
  if n == 1:
    return 1
  else:
    if n % 2 == 1:
      n = n * 3 + 1
      return func(n)
    else:
      n = int(n / 2)
      return func(n)

print('func------------------------')
func(3)
# print(func(7))
# print(func(6))
print('func------------------------')


# 정수 n이 입력으로 주어졌을 때 n을 1, 2, 3의 합으로 나타낼 수 있는 방법의 수를 구하시오.
def c(n: int) -> int:
  if n == 1:
    return 1
  elif n == 2:
    return 2
  elif n == 3:
    return 4
  
  return c(n - 1) + c(n - 2) + c(n - 3)

import time
start = time.time()

print(c(30))

print('time: ', time.time()- start)