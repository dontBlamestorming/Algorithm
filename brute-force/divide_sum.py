'''
    BOJ(백준)
    분해합
    url : https://www.acmicpc.net/problem/2231

    어떤 자연수 N의 N + (N의 각 자리수)는 그 자연수의 분해합이다
    이 자연수 N은 이 분해합의 생성자이다. 
'''

import sys

n = int(sys.stdin.readline().rstrip())


def get_start_num(n):
    _start = n - len(str(n)) * 9

    # _start가 음수가 될 수도 있음
    # 예를들면 10같은 경우, 10 - 18 = -8이 되어버림
    # 따라서 _start가 될 수 있는 최소 조건은 1
    if _start < 0:
        _start = 1
        return _start
    else:
        return _start


def get_min_constructor(begin, n):

    for constructor in range(begin, n):  # 189
        divide_sum = constructor

        for digit in str(divide_sum):
            divide_sum += int(digit)

        if divide_sum == n:
            return constructor

    # 바로 위 if문까지 읽지 않는다면 생성자가 없는 것
    return 0


start_num = get_start_num(n)
answer = get_min_constructor(start_num, n)
print(answer)
