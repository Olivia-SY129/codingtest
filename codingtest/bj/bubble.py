# 데이터가 두 개 일 때

a = [2, 1]
if a[0] > a[1]:
  a0 = a[0]
  a[0] = a[1]
  a[1] = a0

print(a)


# 데이터가 세 개 일 때

b = [3, 2, 1]

for i2 in range(len(b)-1):
  for i in range(len(b)-1-i2):
    if b[i] > b[i+1]:
      num = b[i]
      b[i] = b[i+1]
      b[i+1] = num

print(b)

c = [4, 3, 2, 1]

for i2 in range(len(c)-1):
  swap = False
  for i in range(len(c)-1-i2):
    if c[i] > c[i+1]:
      num = c[i]
      c[i] = c[i+1]
      c[i+1] = num
      swap = True
  if not swap:
    break
    
print(c)