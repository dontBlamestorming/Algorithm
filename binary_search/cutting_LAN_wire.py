'''
    BOJ(백준)
    랜선 자르기
    url : https://www.acmicpc.net/problem/1654
'''

import sys

K, N = map(int, sys.stdin.readline().rstrip().split())
len_wires = [int(sys.stdin.readline().rstrip()) for _ in range(K)]

start = 1  # 최소로 주어질 수 있는 lan선의 길이
end = max(len_wires)

while start <= end:
    mid = (start + end) // 2
    cutted_len = 0

    # 컷팅
    # mid - 컷팅하는 길이
    for wire in len_wires:
        cutted_len += wire // mid

    if cutted_len >= N:
        # 컷팅한 랜선을 합산한 결과가 목표값보다 크면 mid + 1 -> 새로운 start가 됨
        start = mid + 1
    else:
        # 컷팅한 랜선을 합산한 결과가 목표값보다 작으면 mid - 1 -> 새로운 end가 됨
        end = mid - 1


print(end)
