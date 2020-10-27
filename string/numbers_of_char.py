'''
BOJ(백준)
단어의 개수
url : https://www.acmicpc.net/problem/1152
'''

import sys

str = sys.stdin.readline()

_str = str.strip()  # 양쪽 끝 white space 제거
cnt_space = 0

if len(_str):  # 글자가 입력된 경우
    for char in _str:   # looping중 space 만나면 cnt + 1
        if char == " ":
            cnt_space += 1

    print(cnt_space + 1)

else:   # 공백만 들어온경우
    print(0)
