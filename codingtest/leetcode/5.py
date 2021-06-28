# 49 Group Anagrams

import collections

input = ['eat', 'tea', 'ate', 'nat', 'bat']

def groupAnagrams(strs: list[str]) -> list[list[str]]:
  anagrams = collections.defaultdict(list)

  for word in strs:
    anagrams[''.join(sorted(word))].append(word)
  
  return list(anagrams.values())

print(groupAnagrams(input))