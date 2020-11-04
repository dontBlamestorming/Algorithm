'''
    BOJ(백준)
    체스판 다시 칠하기
    url : https://www.acmicpc.net/problem/1018
'''

import sys

N, M = list(map(int, sys.stdin.readline().rstrip().split()))
board = [sys.stdin.readline().rstrip() for _ in range(N)]

# 새로 칠해야하는 최악의 가정에서 8 * 8 = 64
repaint = 64

white_start_board = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
]

black_start_board = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
]

# board의 8 * 8의 모든 경우의 수에서 탐색할 것
for i in range(N - 7):
    for j in range(M - 7):

        col_for_check = 0  # 정상적인 체스판에서 필요한 idx
        cnt = 0
        cnt_w = 0  # 흰색으로 시작하는 주어진 체스판에서 새로 칠해야 하는 경우수 cnt
        cnt_b = 0  # 검은색으로 시작하는 주어진 체스판에서 새로 칠해야 하는 경우수 cnt

        for col in range(i, i + 8):
            row_for_check = 0  # 정상적인 체스판에서 필요한 idx

            for row in range(j, j + 8):

                # 정상적인 체스판과 비교하는 부분
                if board[col][row] != white_start_board[col_for_check][row_for_check]:
                    cnt_w += 1

                if board[col][row] != black_start_board[col_for_check][row_for_check]:
                    cnt_b += 1

                row_for_check += 1

            col_for_check += 1

        # 주어진 체스판이 검은색으로 시작한다면 새로 칠해야 하는 수와
        # 흰색으로 시작하는 체스판에서 새로 칠해야하는 경우의 수 중 최소값
        cnt = min(cnt_w, cnt_b)

        if cnt < repaint:
            repaint = cnt

print(repaint)
