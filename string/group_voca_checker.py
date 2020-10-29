'''
    BOJ(백준)
    그룹 단어 체커
    url : https://www.acmicpc.net/problem/1316
'''
import sys

T = int(sys.stdin.readline())

cnt = 0

for _ in range(T):
    word = sys.stdin.readline().rstrip()

    for i in range(1, len(word)):
        if word[i - 1] != word[i]:  # 다른 char가 발견된다면?
            diffrent_char = word[i - 1]  # 그 char
            striped_str = word[i:]  # 그 char 기준으로 오른쪽으로 자른 string
            # print("diffrent_char :", diffrent_char)
            # print("striped_str :", striped_str)

            if diffrent_char in striped_str:  # 그 char가 남은 string에 있다면?
                cnt += 1  # 그룹단어가 아님
                # print("cnt :", cnt)
                break

print(T - cnt)
