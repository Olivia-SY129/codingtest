n = int(input())
scores = list(map(int, input().split()))
max = max(scores)
for i in range(n):
  scores[i] = scores[i]*100/max

print(sum(scores)/n)