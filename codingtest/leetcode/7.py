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


# 딕셔너리를 이용한 조회
def twoSum3(nums: list[int], target: int) -> list[int]:
  nums_map = {}
  # 키와 값을 바꿔서 딕셔너리로 저장
  for i, num in enumerate(nums):
    nums_map[num] = i

  # 타겟에서 첫 번째 수를 뺀 결과를 키로 조회
  for i, num in enumerate(nums):
    if target - num in nums_map and i != nums_map[target - num]:
      return [i, nums_map[target - num]]

print(twoSum3(nums, target))


# twoSum3 개선
def twoSum4(nums: list[int], target: int) -> list[int]:
  nums_map = {}
  # 하나의 for 문으로 통합
  for i, num in enumerate(nums):
    if target - num in nums_map:
      return [nums_map[target - num], i]
    nums_map[num] = i

print(twoSum4(nums, target))
