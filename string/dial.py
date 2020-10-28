'''
    BOJ(백준)
    다이얼
    url : https://www.acmicpc.net/problem/5622
'''

import sys

word = sys.stdin.readline().strip()

# 할머니는 전화번호를 각 숫자에 해당하는 문자로 외운다
strings = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"]
time = 0

for idx, string in enumerate(strings):
    for char_str in string:
        for char_word in word:
            if char_str == char_word:
                time += idx + 2

 # 숫자 1을 걸려면 총 2초가 필요하다
 # 각 문자에 대응되는 숫자를 dial할 때 해당 숫자 + 1초가 걸린다
print(time + len(word))
