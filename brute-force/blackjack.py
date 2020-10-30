'''
    BOJ(백준)
    블랙잭
    url : https://www.acmicpc.net/problem/2798
'''

import sys
N, M = map(int, sys.stdin.readline().split())
numbers = list(map(int, sys.stdin.readline().rstrip().split()))
drawing = 3
answer = 0


def combination(arr, r):

    arr = sorted(arr)
    _max = []

    def generate(chosen):
        # chosen에 저장된 원소의 개수가 r개이면 하나의 조합 완성
        if len(chosen) == r:
            num = 0
            _sum = sum(chosen)  # 3개로 만들어진 원소의 합

            if num < _sum:
                num = _sum
                _max.append(num)

            return

        if chosen:
            # start = chosen list 맨 끝 원소의 index + 1
            # 순서를 고려하지 않기 때문
            start = arr.index(chosen[-1]) + 1
            # 현재 코드에서는 중복 발생 여부 O
        else:
            start = 0

        for nxt in range(start, N):
            chosen.append(arr[nxt])
            generate(chosen)
            chosen.pop()

    generate([])
    return _max


# numbers C drawing
num_of_cases = sorted(combination(numbers, drawing))

for case in num_of_cases:
    if case <= M:
        answer = case

print(answer)
