'''
    단지 번호붙이기
    url : https://www.acmicpc.net/problem/2667
'''


import sys
import pprint

# input
N = int(sys.stdin.readline())
board = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
visited = [[False for boolean in range(N)] for _ in range(N)]
num_of_address = 0
answer = []

# 상, 하, 좌, 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(location):
    global num_of_homes
    x, y = location
    visited[x][y] = True

    for i in range(4):
        _x = x + dx[i]
        _y = y + dy[i]

        if 0 <= _x < N and 0 <= _y < N:  # _x, _y가 음수이고 board범위를 넘어가면 탈락
            if board[_x][_y] != 0 and not visited[_x][_y]:
                num_of_homes += 1
                dfs([_x, _y])

    return num_of_homes


# 주어진 board의 [0,0]에서 탐색을 시작하여
for i in range(len(board)):
    for j in range(len(board[i])):

        # 집을 발견하고, 그 집이 탐색이 안된 집이라면?
        if board[i][j] == 1 and not visited[i][j]:
            # 단지 수 증가
            num_of_address += 1
            # 단지 내에 있는 집의 개수
            num_of_homes = 1  # 제일 처음 찾아들어가는 집도 세야함
            # 다른 집 탐색 시작
            homes = dfs([i, j])    # 곧바로 상,하,좌,우로 다른 집이 있는지 탐색
            answer.append(homes)


# output
for i in sorted(answer):
    print(i)
