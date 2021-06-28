# 1 Two Sum

nums = [2, 7, 11, 15]
target = 9

# 브루트 포스
def twoSum(nums: list[int], target: int) -> list[int]:
  for i in range(len(nums) - 1):
    for j in range(i + 1, len(nums)):
      if nums[i] + nums[j] == target:
        return [i, j]

print(twoSum(nums, target))


# in 을 이용한 탐색
def twoSum2(nums: list[int], target: int) -> list[int]:
  for i, n in enumerate(nums):
    complement = target - n

    if complement in nums[i + 1:]:
      return [i, nums[i + 1:].index(complement) + (i + 1)]

print(twoSum2(nums, target))