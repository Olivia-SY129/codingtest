# DP를 이용한 이진 탐색 (Binary Search)

def binary(data: list[int], search) -> None:
  if len(data) == 0:
    return False
  if len(data) == 1 and data[0] == search:
    return True
  if len(data) == 1 and data[0] != search:
    return False

  m = len(data) // 2
  if search == data[m]:
    return True
  else:
    if search > data[m]:
      return binary(data[m+1:], search)
    else:
      return binary(data[:m], search)

import random
data = random.sample(range(100), 30)
data.sort()
print(data)
print(binary(data, 30))