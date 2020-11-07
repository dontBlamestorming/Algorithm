'''
    정수 삼각형
    url: https://programmers.co.kr/learn/courses/30/lessons/43105
'''


def solution(triangle):
    _len_of_triangle = len(triangle)

    # 연산한 결과값 넣을 list
    board = [[] for _ in range(_len_of_triangle)]

    for i in range(len(board)):
        for j in range(len(triangle[i])):
            board[i].append(0)

    board[0][0] = triangle[0][0]

    for i in range(1, _len_of_triangle):
        for j in range(i + 1):

            if j == 0:  # 제일 왼쪽값 -> 단일값(경우의수 X)
                board[i][0] = triangle[i][0] + board[i-1][0]

            elif i == j:  # 제일 오른쪽 값 -> 단일값(경우의수 X)
                board[i][j] = triangle[i][j] + board[i-1][j-1]

            else:  # 대각선 방향으로 한칸 오른쪽, 왼쪽
                left = triangle[i][j] + board[i-1][j-1]
                right = triangle[i][j] + board[i-1][j]

                board[i][j] = max(left, right)

    return max(max(board))
