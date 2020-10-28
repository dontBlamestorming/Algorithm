'''
    BOJ(백준)
    크로아티아 알파벳
    url : https://www.acmicpc.net/problem/2941
'''

import sys

word = sys.stdin.readline().rstrip()

# '='와 'j' 때문에 한번에 2개의 단어가 읽힐 수 있을 가능성 X
strings = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for str in strings:
    if str in word:
        new_word = word.replace(str, "*")  # *은 위 리스트에 포함 X
        word = new_word  # 바뀐 문장으로 다시 초기화


print(word)
