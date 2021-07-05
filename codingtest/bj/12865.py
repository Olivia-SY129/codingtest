n, k = list(map(int, input().split()))

pack = [list(map(int, input().split())) for i in range(n)]

pack.sort()

print(pack)