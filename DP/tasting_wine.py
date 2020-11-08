"""
    BOJ 2156 포도주 시식
    url : https://www.acmicpc.net/problem/2156
"""


import sys
N = int(sys.stdin.readline().rstrip())
wines = [int(sys.stdin.readline().rstrip()) for _ in range(N)]
drinked_records = [0 for _ in range(N + 1)]
wines.insert(0, 0)  # 3번째 경우의 수를 위한 idx 맞추기용


def get_max_records(N, wines, records):
    # N이 1 or 2인 경우
    if N == 1:
        return wines[1]

    if N == 2:
        return wines[1] + wines[2]

    records[1] = wines[1]  # N == 1
    records[2] = wines[1] + wines[2]  # N == 2

    for i in range(3, N + 1):

        # n번째 위치한 포도주를 마시지 않는 경우 최대값(OOX)
        records[i] = records[i - 1]

        # n번째 위치한 포도주를 마시는데 그게 연속된 첫번째 순번의 포도주인 경우(OXO)
        case_1 = records[i]
        records[i] = max(case_1, records[i - 2] + wines[i])

        # n번째 위치한 포도주를 마시는데 그게 연속된 두번 째 순번의 포도주인 경우(XOO)
        case_2 = records[i]
        records[i] = max(
            case_2, records[i - 3] + wines[i - 1] + wines[i])

    return records[-1]


result = get_max_records(N, wines, drinked_records)

print(result)
