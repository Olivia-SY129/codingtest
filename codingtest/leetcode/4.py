# 819 Most Common Word

import collections, re

p = 'Bob hit a ball, the hit BALL flew after it was hit.'
banned = ['hit']

def mostCommonWord(p: str, banned:list[str]):
  words = [word for word in re.sub(r'[^\w]', ' ', p)
    .lower().split()
        if word not in banned]
  
  counts = collections.Counter(words)
  # 가장 흔하게 등장하는 단어의 첫번째 인덱스 리턴
  return counts.most_common(1)[0][0]

print(mostCommonWord(p, banned))
