# 15 3Sum

input = [-1, 0, 1, 2, -1, -4]

def threeSum(nums: list[int]) -> list[list[int]]:
  nums.sort()
  ans = []

  for i in range(len(nums) - 2):
    if i > 0 and nums[i] == nums[i - 1]:
      continue

    m = i + 1
    right = len(nums) - 1
    while m < right:
      sum = nums[m] + nums[i] + nums[right]
      if sum < 0:
        m += 1
      elif sum > 0:
        right -= 1
      else:
        ans.append([nums[i], nums[m], nums[right]])
        while m < right and nums[m] == nums[m + 1]:
          m += 1
        while m < right and nums[right] == nums[right - 1]:
          right -= 1
        
        m += 1
        right -= 1
  
  return ans

print(threeSum(input))