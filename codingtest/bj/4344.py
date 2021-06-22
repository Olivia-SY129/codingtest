c = int(input())
for i in range(c):
  test = list(map(int, input().split()))
  scores = list(map(float, test[1:]))
  avg = sum(scores)/(len(scores))
  above = 0
  for i in range(len(scores)):
    if scores[i] > avg:
      above += 1
  stud = above/len(scores)*100
  print('%.3f%%' % stud)
  # print(f'{(above/len(scores))*100:.3f}%')