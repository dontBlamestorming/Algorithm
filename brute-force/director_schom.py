"""
    BOJ 1436 영화감독 숌
    url : https://www.acmicpc.net/problem/1436
"""

N = int(input())
num = 666  # 1부터 돌릴 필요가 없음

while N:
    num += 1

    if "666" in str(num):
        N -= 1

print(num - 1)
