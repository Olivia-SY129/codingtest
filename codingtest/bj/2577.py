# import sys

# A = int(sys.stdin.readline())
# B = int(sys.stdin.readline())
# C = int(sys.stdin.readline())

# mul = str(A * B * C)
# digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# for i in range(len(mul)):
#   digits[int(mul[i])] += 1

# print('\n'.join(str(d) for d in digits))

A = int(input())
B = int(input())
C = int(input())

d = list(map(int, (str(A*B*C))))

for i in range(10):
  print(d.count(i))