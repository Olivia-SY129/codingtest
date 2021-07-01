import random

input = random.sample(range(100), 10)

def selection(lt: list[int]) -> None:
  for j in range(len(lt) - 1):
    picked = j
    for i in range(j + 1, len(lt)):
      if lt[picked] > lt[i]:
        picked = i
      
    lt[j], lt[picked] = lt[picked], lt[j]

selection(input)
print(input)