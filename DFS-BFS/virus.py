''' 
바이러스
url : https://www.acmicpc.net/problem/2606
'''

import sys

# input
computers = int(sys.stdin.readline())
networks = int(sys.stdin.readline())
edge = [list(map(int, sys.stdin.readline().split())) for _ in range(networks)]

# initalize
board = [[0 for col in range(computers + 1)] for row in range(computers + 1)]
visited = [False for boolean in range(computers + 1)]


# calculation
for connected in edge:
    x = connected[0]
    y = connected[1]

    board[x][y] = 1
    board[y][x] = 1


def dfs(virus):
    visited[virus] = True
    for i in range(1, len(board)):
        if board[virus][i] and not visited[i]:
            dfs(i)


dfs(1)

print(visited.count(True) - 1)  # 첫번 째 컴퓨터는 제외
