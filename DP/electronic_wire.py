
def get_LIS(n, lst):
    dp = [1] * n

    if n == 1:
        print(1)
        exit()

    for i in range(n):

        for j in range(i):

            if lst[j] < lst[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)


def main():
    N = int(input())
    pole = [[int(i) for i in input().rstrip().split()] for j in range(N)]
    _pole = []

    pole.sort(key=lambda x: x[0])
    for i in range(N):
        _pole.append(pole[i][1])

    LIS = get_LIS(N, _pole)

    print(N - LIS)


main()
