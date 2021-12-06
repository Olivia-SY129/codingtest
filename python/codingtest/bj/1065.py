input = int(input())

def hansoo(num):
  count = 0
  if num < 100:
    count = num
  else:
    count = 99
    for i in range(100, num + 1):
      str_num = str(i)
      if int(str_num[0]) - int(str_num[1]) == int(str_num[1]) - int(str_num[2]):
        count += 1

  print(count)

hansoo(input)
