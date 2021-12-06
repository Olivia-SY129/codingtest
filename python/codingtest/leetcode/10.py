# 561 Array Partition I

input = [1, 4, 3, 2]

# 4

def arrayPairSum(nums: list[int]) -> int:
  nums.sort()
  sum = 0
  i = 0
  while i < len(nums) - 1:
    sum += min(nums[i], nums[i+1])
    i += 2  
  return sum

print(arrayPairSum(input))

# 파이써닉
def arrayPairSum2(nums: list[int]) -> int:
  return sum(sorted(nums)[::2])