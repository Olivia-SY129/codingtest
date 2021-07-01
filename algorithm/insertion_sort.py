import random

input = random.sample(range(100), 50)
input2 = list(input)
input2.sort()

def insertion(lt: list[int]) -> None:
  for i in range(1, len(lt)):
    for j in range(i):
      if lt[j] > lt[i]:
        lt[j], lt[i] = lt[i], lt[j]

insertion(input)

print(input == input2)