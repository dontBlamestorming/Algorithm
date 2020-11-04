'''
    BOJ(백준)
    나무 자르기
    url : https://www.acmicpc.net/problem/2805
'''

import sys

N, M = map(int, sys.stdin.readline().rstrip().split())
trees = list(map(int, sys.stdin.readline().rstrip().split()))

start = 1  # 주어질 수 있는 나무 길이의 최소값
end = max(trees)  # 주어진 나무중 가장 긴 것

while start <= end:
    # 주어진 나무에서 중간길이 나무 특정
    mid = (start + end) // 2
    cutted_tree_meter = 0

    # 벌목
    for tree in trees:
        if tree >= mid:
            cutted_tree_meter += tree - mid

    if cutted_tree_meter >= M:
        # 벌목한 나무 길이의 합이 목표길이보다 많은경우 -> 중간값 상향조정
        start = mid + 1
    else:
        # 목표길이보다 작은경우 -> 중간값 하향조정
        end = mid - 1

print(end)
