"""
    BOJ 2573 빙산
    https://www.acmicpc.net/problem/2573

"""

'''
    1. 처음 좌표를 찾고 bfs 시작
        1-1. time + 1
    2. 해당 좌표에서 상, 하, 좌, 우 체크할 때 0이면 melting + 1씩, 아니면 queue에 넣는다. 이 때 visited처리를 한다. 녹는 처리는 1년을 주기로 진행한다.
    3. 한번의 bfs루틴이 끝났을 때 검사하는데 visited처리가 안되어있으면? -> 분리된 것(time return)
        모두 visted처리 되어있다? 처음 좌표 찾고 다시 bfs루틴시작(visited가 초기화 되어야겠지?)
    4. 반복 
    check
    1. year의 위치
    2. visited의 위치
'''




import pprint # 출력을 예쁘게
import sys
def bfs(coords, info_map, visited):
    queue = []
    queue.append(coords)
    melting_info = []

    # 상, 하, 좌, 우
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    while queue:
        head = queue.pop(0)
        melting = 0

        x, y = head
        visited[x][y] = True  # 나중에 검사 한번 해야하는데 True가 괜찮을지 고민해야함

        for i in range(4):
            _x = x + dx[i]
            _y = y + dy[i]

            # 녹일정도를 카운트, q에 추가
            if 0 <= _x < len(info_map) and 0 <= _y < len(info_map[0]):

                if info_map[_x][_y] == 0:  # 특정 head 주변이 바다인경우 녹일정도 + 1
                    melting += 1

                elif info_map[_x][_y] and not visited[_x][_y]:
                    queue.append([_x, _y])

        melting_info.append([x, y, melting])
    print(melting)

    # 중복된 값이 발생한다. 이유는 아마 bfs도중 head가 해당 노드에 도착하지 않았는데 옆에서 참조한 경우이다. 어쨋든 중복을 없애야 한다.
    # 2차원 list 중복제거
    melting_list = list(set([tuple(val) for val in melting_info]))
    # 원래 map에서 빙산을 녹이기 위한 참조용 데이터이기 때문에 tuple ok

    # 녹이기
    for _list in melting_list:
        x, y, melting = _list

        if info_map[x][y] <= melting:  # 빙산의 높이보다 더 많이 녹는 경우
            info_map[x][y] = 0
        else:
            info_map[x][y] -= melting  # 녹이기

    # 녹인 info_map이 있음


# 중복제거를 할 때에 for문을 한번만 쓴다면 range에서 제거할 객체를 사용하고 있기 때문에 remove에서 걸린다


def solution(n, m, info_map):
    # enter your code
    # n = row, m = col, info_map = 현재 빙산의 높이 정보
    year = 0
    iceberg = 0

    visited = [[False for _ in range(m)] for _ in range(n)]

    # 전체 맵에서 빙산이 있는 좌표 추적(시작점)
    for i in range(len(info_map)):
        for j in range(len(info_map[i])):
            if iceberg == 2:
                # 빙산섬이 2개면 분리된 것
                break

            if info_map[i][j] and not visited[i][j]:
                iceberg += 1
                year += 1

                # 처음 발견한 빙산의 좌표
                coords = [i, j]

                # 탐색 시작
                bfs(coords, info_map, visited)

    return year


def main():
    n, m = 5, 7
    arr = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 2, 4, 5, 3, 0, 0],
        [0, 3, 0, 2, 5, 2, 0],
        [0, 7, 6, 2, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]

    solution(n, m, arr)


if __name__ == '__main__':
    main()
