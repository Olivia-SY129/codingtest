# 125 

# input = list("".join(input().split()))

# for char in input:
#   if not char.isalnum():
#     input.remove(char)
#   elif char.isupper():
#     input[input.index(char)] = char.lower()

# for char in input:
#   if char.isupper():
#     input[input.index(char)] = char.lower()


# reversed = list(input)
# reversed.reverse()



# print(input)
# print(reversed)

# print(input == reversed)


def isPalindrome(s: str) -> bool:
  strs = []
  for char in s:
    if char.isalnum():
      strs.append(char.lower())
  
  while len(strs) > 1:
    if strs.pop(0) != strs.pop():
      return False

  return True

input = input()

print(isPalindrome(input))


import collections

def isPalindrome2(s: str) -> bool:
  # 자료형 데크로 선언
  strs: Deque = collections.deque()

  for char in s:
    if char.isalnum():
      strs.append(char.lower())

  while len(strs) > 1:
    if strs.popleft() != strs.pop():
      return False
  
  return True

print(isPalindrome2(input))



import re

def isPalindrome3(s: str) -> bool:
  s = s.lower()
  # 정규식으로 불필요한 문자 필터링
  s = re.sub('[^a-z0-9]', '', s)

  return s == s[::-1] # 슬라이싱

print(isPalindrome3(input))