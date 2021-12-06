# code = list(map(int, input().split()))
# asc = True
# dsc = True
# for i in range(7):
#   if code[i] < code[i+1]:
#     if asc == True:
#       asc = True
#       dsc = False
#     else: 
#       asc = False
#       dsc = False
#       print('mixed')
#       break
#   elif code[i] > code[i+1]:
#     if dsc == True:  
#       dsc = True
#       asc = False
#     else:
#       asc = False
#       dsc = False
#       print('mixed')
#       break
#   else: 
#     print('??')
#     break
# if asc:
#   print('asc')
# elif dsc:
#   print('dsc')

a = list(map(int, input().split(' ')))

asc = True
dsc = True

for i in range(7):
  if a[i+1] > a[i]:
    dsc = False
  elif a[i+1] < a[i]:
    asc = False

if asc:
  print('ascending')
elif dsc:
  print('descending')
else: 
  print('mixed')