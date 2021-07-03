def merge(left, right):
  sorted_list = list()
  left_curr, right_curr = 0, 0

  while len(left) > left_curr and len(right) > right_curr:
    if left[left_curr] > right[right_curr]:
      sorted_list.append(right[right_curr])
      right_curr += 1
    else:
      sorted_list.append(left[left_curr])
      left_curr += 1

  while len(left) > left_curr:
    sorted_list.append(left[left_curr])
    left_curr += 1

  while len(right) > right_curr:
    sorted_list.append(right[right_curr])
    right_curr += 1

  return sorted_list

  

def mergesplit(data):
  if len(data) <= 1:
    return data
  
  split = int(len(data)/2)
  left = mergesplit(data[:split])
  right = mergesplit(data[split:])
  return merge(left, right)


import random

data_list = random.sample(range(100), 10)

print(mergesplit(data_list))