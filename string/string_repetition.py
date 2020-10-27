'''
BOJ
문자열 반복
url : https://www.acmicpc.net/problem/2675
'''

import sys
from collections import defaultdict


def find_answer(arr):
    _max_cnt = 0

    for key, val in arr:

        if _max_cnt == val:
            print("?")
            return

        if _max_cnt < val:
            _max_cnt = val

    print(arr[0][0])


def count_each_char(str):
    cnt = defaultdict(int)

    for char in str:
        cnt[char] += 1

    return cnt


def solution():
    str = sys.stdin.readline().rstrip()
    str_upper = str.upper()  # 대소문자 상관없음
    cnt_dict = count_each_char(str_upper)

    # sort - value를 기준으로 내림차순 정렬
    cnt_sorted = sorted(
        cnt_dict.items(), key=lambda item: item[1], reverse=True)

    find_answer(cnt_sorted)


solution()
