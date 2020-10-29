'''
    BOJ(백준)
    알파벳 찾기
    url : https://www.acmicpc.net/problem/10809
'''

import sys

str = sys.stdin.readline().rstrip()
alphabet = "abcdefghijklmnopqrstuvwxyz"

for char in alphabet:  # 알파벳에서 char 하나씩
    if char in str:  # 입력된 단어에 char이 포함되어있으면
        idx = str.index(char)  # char의 idx를 가져옴
        print(idx, end=" ")
    else:
        print(-1, end=" ")

''' 
    두번 째 방법 - find 메서드 사용

    for i in range(len(alphabet)):
        print(str.find(alphabet[i]), end=' ') # 찾는 char가 없을 경우 -1을 return
'''
