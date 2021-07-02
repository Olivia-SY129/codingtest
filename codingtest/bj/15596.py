def solve(a: list) -> int:
  sum = 0
  for num in a:
    sum += num
  return sum

import random

lt = random.sample(range(100), 10)
a = solve(lt)
b = sum(lt)

print(a, b)
