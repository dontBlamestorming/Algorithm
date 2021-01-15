"""
    BOJ 2150 Strongly Connected Component
    url : https://www.acmicpc.net/problem/2150
"""

# 입력
# V, E = list(map(int, input().rstrip().split()))
# num_of_nodes, num_of_edges = V, E
# _map = [list(map(int, input().split())) for _ in range(edge)]


from sys import setrecursionlimit
import pprint
setrecursionlimit(10 ** 9)

num_of_nodes = 7
num_of_edges = 9
_map = [
    [1, 4],
    [4, 5],
    [5, 1],
    [1, 6],
    [6, 7],
    [2, 7],
    [7, 3],
    [3, 7],
    [7, 2],
]

_id = 0  # Id(설명필요)
d = [0 for _ in range(num_of_nodes + 1)]  # 각 정점의 id를 저장

finisihed = [False for _ in range(num_of_nodes + 1)]
stack = []
SCC = []


graph_lst = [[0] for _ in range(num_of_nodes + 1)]


visited = [[False for _ in range(num_of_nodes + 1)]
           for _ in range(num_of_nodes + 1)]


def DFS(node):
    global _id  # 추후에 파라미터로 넘겨줘도 될듯
    _id += 1  # DFS가 다시 돌때마다 count
    d[node] = _id
    stack.append(node)
    parent = d[node]  # 자신의 부모가 누구인지 알 수 있게 하는
    print(d)
    for i in range(1, len(graph_lst[node])):
        y = graph_lst[node][i]  # 연결리스트에서 연결된 edge정보 참조
        # 4, 6

        if d[y] == 0:  # 탐색이 안된 노드일때(즉, 부모가 아직 특정되지 않았을 때)
            parent = min(parent, DFS(y))

        elif finisihed[y] == False:  # 탐색 중인 노드인 경우
            parent = min(parent, d[y])

    if parent == d[node]:  # 부모와 탐색중인 node가 같다면
        scc = []

        while(1):
            last_in_stack = stack[-1]  # 1, 5, 4, 1
            stack.pop()  # []
            scc.append(last_in_stack)
            finisihed[last_in_stack] = True

            if last_in_stack == node:
                break

        SCC.append(scc)

    return parent


# 연결리스트로 엣지 정보 저장
for edge in _map:
    x, y = edge
    graph_lst[x] = graph_lst[x] + [y]

pprint.pprint(graph_lst)

for node in range(1, num_of_nodes + 1):
    if d[node] == 0:  # 아직 판단 X
        DFS(node)
