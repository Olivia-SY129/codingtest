n = int(input())
quiz = [input() for i in range(n)]
scores = [0 for i in range(n)]
for i in range(n):
  unit = 0
  for j in range(len(quiz[i])):
    if quiz[i][j] == 'O':
      unit += 1
      scores[i] += unit
    else: unit = 0

for x in scores:
  print(x)



# str1 = 'OOXXOXXOOO'
# score = 0
# unit = 0
# for i in range(len(str1)):
#   if str1[i] == 'O':
#     unit += 1
#     score += unit
#   else: unit = 0

# print(score)