'''
    BOJ(백준)
    덩치
    url : https://www.acmicpc.net/problem/7568
'''

import sys

N = int(sys.stdin.readline().rstrip())
_list = [list(map(int, sys.stdin.readline().rstrip().split()))
         for _ in range(N)]

for i in range(N):
    weight_i = _list[i][0]
    height_i = _list[i][1]
    bulk_degree = 1

    for j in range(N):
        weight_j = _list[j][0]
        height_j = _list[j][1]

        # 자신보다 덩치가 큰 사람이 k명이라면, 그 사람의 등수는 k + 1
        # 덩치는 키와 몸무게 둘 다 큰 경우
        if weight_i < weight_j and height_i < height_j:
            bulk_degree += 1

    print(bulk_degree, end=" ")
