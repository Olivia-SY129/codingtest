import sys

nums = []
for i in range(9):
  nums.append(int(sys.stdin.readline()))

for i in range(9):
  if nums[i] == max(nums):
    index = i
print(max(nums), index+1, sep='\n')