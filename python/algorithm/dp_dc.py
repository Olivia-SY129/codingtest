# recursion
def fibonacci(n: int) -> int:
  if n <= 1:
    return n
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

print('recursion: ', fibonacci(6))


# dp
def fibo_dp(num: int) -> int:
  cache = [0 for index in range(num + 1)]
  cache[0] = 0
  cache[1] = 1
  
  for i in range(2, num + 1):
    cache[i] = cache[i - 1] + cache[i - 2]
  
  return cache[num]

print('fibo_dp: ', fibo_dp(6))


# 정수 n이 입력으로 주어졌을 때 n을 1, 2, 3의 합으로 나타낼 수 있는 방법의 수를 구하시오.
# dp를 사용하시오.
def c_dp(num: int) -> int:
  cache = [0 for i in range(num + 1)]
  cache[0] = 0
  cache[1] = 1
  cache[2] = 2
  cache[3] = 4

  for i in range(4, num + 1):
    cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3]
  return cache[num]



import time
start = time.time()

print(c_dp(30))

print('time: ', time.time()- start)