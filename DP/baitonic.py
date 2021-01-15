'''

    1. 최대값을 구한다.
    2. 2중 for문으로 탐색한다.
    3. 오름차순으로 탐색한다. 
    4. 최대값을 만나면, 내림차순으로 탐색한다.
    5. 탐색이 끝났을 때 배열의 길이를 저장한다.
    6. 최대값을 찾는다.

'''


# 앞에서부터


def get_LIS(n, lst):
    dp = [1] * n

    if n == 1:
        print(1)
        exit()  # main까지 종료

    for i in range(n):  # 1. j < i

        for j in range(i):

            if lst[j] < lst[i]:  # 2. lst[j] < lst[i]
                dp[i] = max(dp[i], dp[j] + 1)

    return dp


def main():
    N = int(input())
    lst = list(map(int, input().split()))
    _lst = list(reversed(lst))  # 주어진 list에서 거꾸로 LIS 찾기위해

    LIS = get_LIS(N, lst)
    _LIS = get_LIS(N, _lst)
    _LIS.reverse()  # 다시 원래대로 turn

    baitonic = [0] * N

    for i in range(N):
        baitonic[i] = LIS[i] + _LIS[i]

    print(max(baitonic) - 1)


main()
