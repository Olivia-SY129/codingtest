import random
data_list = random.sample(range(100), 10)

def quick_sort(data_list):
  if len(data_list) <= 1:
    return data_list

  left = list()
  right = list()
  pivot = data_list[0]

  for i in range(1, len(data_list)):
    if data_list[i] < pivot:
      left.append(data_list[i])
    else:
      right.append(data_list[i])

  return quick_sort(left) + [pivot] + quick_sort(right)

print(quick_sort(data_list))


def quick_sort2(data):
  if len(data) <= 1:
    return data

  pivot = data[0]
  left = [x for x in data[1:] if x < pivot]
  right = [x for x in data[1:] if x >= pivot]

  return quick_sort2(left) + [pivot] + quick_sort2(right)

print(quick_sort2(data_list))
