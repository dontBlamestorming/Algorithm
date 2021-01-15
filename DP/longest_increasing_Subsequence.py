"""
    BOJ 11053 가장 긴 증가하는 부분 수열
    url : https://www.acmicpc.net/problem/11053
"""

# lst를 2중 탐색한다.
# i보다 큰 j를 2차원 리스트에 넣는다

N = int(input())
sequence = [int(num) for num in input().rstrip().split()]
sub_sequence = [[] for _ in range(N)]  # 부분수열 담을 lst
dp = [1] * N

if N == 1:
    print(1)
    exit()


# 부분 수열을 구하는 loop
for i in range(1, N):  # num -> 각 부분수열의 end 값 idx

    for j in range(i):

        if sequence[j] < sequence[i]:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))


# result = [1] * N  # 1은 기준값이 되는 값이 수열에 포함되어있다고 가정

# for i in range(1, N):
#     # i번째의 값이 정답의 마지막 값이라고 가정하여

#     for j in range(i):
#         if A[j] < A[i]:  # 현재 기준값보다 앞의 수열이 작은 경우

#             result[i] = max(result[i], result[j] + 1)
#             print(result)


# print(result)

# lst = [[], [], [], [], [], []]


'''

    부분수열에서 증가하는 수열에서 가장 긴 것
    d[i] = 마지막으로 뽑은 수가 a[i]일 때, 가장 긴 부분수열의 길이

    a[i]를 증가수열에 붙일 수 있으려면
    1. 그 증가수열이 a[i]보다 앞에 있어야 하고 (j < i)
    2. a[j]로 끝나는 수열의 마지막 수가 a[i]보다 작아야 한다.(aj < ai)

    d[i] = max(1 <= j < i, a[j] < a[i])(D[j] + 1) else d[i] = 1

    for 

'''
