# -*- coding: utf-8 -*-
# python2에서 기본 인코딩은 ASCII이기 때문에 한글을 사용할 경우 utf-8로 인코딩 방식 변경

""" 
  토마토(7576번)
  백준(BOJ)
  url : https://www.acmicpc.net/problem/7576
"""

from collections import deque


def BFS(T_BOX, Tomatoes, M, N):
    queue = deque(Tomatoes)
    day = 0

    print(queue)
    # 동 남 서 북
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    while queue:
        temp = queue.popleft()
        x, y = temp
        # x = 3, y = 5
        day = T_BOX[x][y]

        for i in range(4):
            # 동 남 서 북 순으로 진행
            new_x = x + dx[i]  # 3, 4, 3, 2
            new_y = y + dy[i]  # 6, 5, 4, 5
            # 우, 하, 좌, 상

            if 0 <= new_x < N and 0 <= new_y < M:
                # 현재 날짜에서 +1 한것보다 크거나
                # 0 이면 실행
                # 위 조건이 아니면 continue
                if T_BOX[new_x][new_y] <= day+1 and T_BOX[new_x][new_y] != 0:
                    continue
                T_BOX[new_x][new_y] = day + 1
                queue.append([new_x, new_y])


def solution():
    M, N = map(int, input().split())

    # 토마토 박스 입력 받기
    T_BOX = []
    for _ in range(N):
        lst = list(map(int, input().split()))
        T_BOX.append(lst)

    # 큐에 익은 토마토 위치 입력
    queue = []
    for i in range(N):
        for j in range(M):
            if T_BOX[i][j] == 1:
                queue.append([i, j])

    # BFS
    max_val = 0
    BFS(T_BOX, queue, M, N)

    # 최댓값 찾기, 찾는도중 0이 있으면 -1
    for i in T_BOX:
        for j in i:
            max_val = max(j, max_val)
            if j == 0:
                return -1

    return max_val-1
