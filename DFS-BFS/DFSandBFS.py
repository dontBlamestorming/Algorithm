import sys
N, M, V = map(int, sys.stdin.readline().split())
connected_info = [[int(i) for i in sys.stdin.readline().split()]
                  for y in range(M)]


def get_board():
    board = [[0 for col in range(N + 1)] for row in range(N + 1)]
    visited = [False for boolean in range(N + 1)]

    for info in connected_info:

        x = info[0]
        y = info[1]

        board[x][y] = 1
        board[y][x] = 1

    return board, visited


def isEmpty(arr):
    if len(arr) == 0:
        return True
    return False


board, visited = get_board()  # for DFS


def dfs(V):

    print(V, end=" ")
    visited[V] = True

    for i in range(1, len(board)):
        if board[V][i] and not visited[i]:
            return dfs(i)

    return


def bfs(V):
    board, visited = get_board()  # for BFS

    queue = []
    print(V, end=" ")
    queue.append(V)
    visited[V] = True

    while not isEmpty(queue):
        head = queue.pop(0)
        for i in range(1, len(board)):
            if board[head][i] and not visited[i]:
                print(i, end=" ")
                queue.append(i)
                visited[i] = True


dfs(V)
print()
bfs(V)

# 파이썬에서 *를 통해 2차원 배열을 형성하면 나중에 그 배열에 []통해 값의 변경을 할 경우 배열 내의 모든값이 다 수정되버림 -> 정확한 메커니즘은 모르지만 *인 것만은 확실
