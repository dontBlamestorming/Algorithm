"""
    BOJ 15953 상금 헌터
    url : https://www.acmicpc.net/problem/15953
"""


def get_prize_2nd(rank, lst):
    prize_by_rank_2nd = []

    for i in range(len(lst)):
        r = i

        if i == 0:
            r = 1
        else:
            r = 2 ** i  # 제곱근

        for _ in range(r):
            prize_by_rank_2nd.append(lst[i])

    if 0 < rank <= len(prize_by_rank_2nd):
        return prize_by_rank_2nd[rank - 1]
    else:
        return 0


def get_prize_1st(rank, lst):
    prize_by_rank_1st = []

    for i in range(1, len(lst) + 1):
        for _ in range(i):
            prize_by_rank_1st.append(lst[i - 1])

    if 0 < rank <= len(prize_by_rank_1st):
        return prize_by_rank_1st[rank - 1]
    else:
        return 0


def solution():
    T = int(input())
    _1st = [500, 300, 200, 50, 30, 10]
    _2nd = [512, 256, 128, 64, 32]

    for _ in range(T):
        socres = list(map(int, input().rstrip().split()))
        a, b = socres

        prize_1st = get_prize_1st(a, _1st)
        # print(prize_1st)
        prize_2nd = get_prize_2nd(b, _2nd)
        # print(prize_2nd)

        print(int(str(prize_1st + prize_2nd) + "0000"))


solution()
