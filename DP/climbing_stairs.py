"""
    BOJ 2579 계단 오르기
    url : https://www.acmicpc.net/problem/2579
"""

import sys
import pprint

stairs = int(sys.stdin.readline().strip())
scores = [int(sys.stdin.readline().strip()) for _ in range(stairs)]
# scores = [10, 20, 15, 25, 10, 20]

dp = [0 for _ in range(stairs + 1)]
dp[0] = 0

for i in range(1, 3):
    if i == 1:
        dp[i] = scores[1]
        continue
    else:
        dp[i] = scores[2] + dp[1]

for i in range(3, stairs):
    dp[i] = max(scores[i] + scores[i-1] + dp[i-3], scores[i] + dp[i-2])

print(dp)
