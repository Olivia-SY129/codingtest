import sys
n, *m = map(int, sys.stdin.read().split())
print(min(m), max(m))