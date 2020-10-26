'''
미로탐색
url : https://www.acmicpc.net/problem/2178
'''

import sys

N, M = map(int, sys.stdin.readline().split())
maze = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
visited = [[False for boolean in range(M)] for _ in range(N)]


def search_bfs(n):
    queue = []
    queue.append(n)

    # 상, 하, 좌, 우
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    while queue:
        head = queue.pop(0)
        x, y, c = head
        visited[x][y] = True

        for i in range(4):
            _x = x + dx[i]
            _y = y + dy[i]
            _c = c + 1

            if 0 <= _x < N and 0 <= _y < M:  # 음수가 아니고 주어진 미로의 map 내에서
                if maze[_x][_y] == 1 and not visited[_x][_y]:
                    maze[_x][_y] = _c
                    queue.append([_x, _y, _c])  # 이동한 칸수를 queue에 넣어서 같이

    print(maze[N-1][M-1])


search_bfs([0, 0, 1])
