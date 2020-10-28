'''
BOJ(백준)
상수
url : https://www.acmicpc.net/problem/2908
'''

import sys

a, b = sys.stdin.readline().split()

# 문자열 a -> reversed(a) -> reversed object -> str(join)
A = ''.join(reversed(a))
B = ''.join(reversed(b))


if A > B:
    print(A)
else:
    print(B)
