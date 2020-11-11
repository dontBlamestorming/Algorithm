'''
    프로그래머스
    소수 찾기
    url : https://programmers.co.kr/learn/courses/30/lessons/42839
'''

prime_numbers = []


def is_demical_num(arr):
    # 소수 판단 함수
    num_str = ""

    for val in arr:
        if type(val) == str:
            # solution에서 만들어진 result함수의 [0]제거
            num_str += val

    num = int(num_str)

    for divided_num in range(2, num):
        # 만약 num이 2 ~ (num-1)만큼 차례대로 나눌 때 한번이라도 나누어 떨어지는 경우 그 num은 소수가 아님
        if num % divided_num == 0:
            return

    if num not in prime_numbers:
        # 0과 1일 경우 제거(소수 아님)
        if num != 0 and num != 1:
            prime_numbers.append(num)


def DFS(lst, depth, visited, r, result):
    # lst - 종이조각 리스트
    # depth - start depth
    # visited - DFS graph에서 상위 노드로 back travel시 중복값 제거
    # r - N개에서 r개만큼 뽑을 때
    # result - 경우의 수를 담을 list

    if depth == r:  # 종료조건
        is_demical_num(result)
        return result

    for i in range(len(lst)):
        if not visited[i]:
            result[depth] = lst[i]
            visited[i] = True
            DFS(lst, depth + 1, visited, r, result)
            visited[i] = False


def solution(numbers):
    lst = list(numbers)
    _len = len(numbers)
    visited, result = [False] * _len, [0] * _len

    for r in range(1, _len + 1):
        # 종이조각으로 만들 수 있는 정수의 경우의 수
        DFS(lst, 0, visited, r, result)

    return len(prime_numbers)
