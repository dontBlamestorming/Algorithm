# check list를 이용한다 (back travel)
# DFS를 이용한다 - 어떤 문제에서 종료조건이 명확히 보이는데, 어떤 경우의 수를 모두 탐색해야 하는 경우에 적절
# 종료조건이 명확하지 않은데 모든 경우의 수를 구해야 한다? -> BFS가 적절
# 순열은 그냥 외운다? - 손으로 경우의 수를 구하는 방법은 쉽다. 하지만 코드로 구현하려면 꽤 복잡하다.

def DFS(depth):
    # visited list을 이용하여
    if depth == r:     # 종료조건
        print(result)

    for i in range(len(lst)):
        if checklist[i] == 0:
            result[depth] = lst[i]
            checklist[i] = 1
            # DFS을 호출하는 이전코드는 grapth에서 내려가는거고 이 밑에는 return 후 올라가면서 읽는 코드
            DFS(depth + 1)
            checklist[i] = 0


def permutation(depth):
    # def perm(arr, depth, length, end):
    # swap을 사용
    if depth == r:  # 종료조건
        print(lst[:r])

    for i in range(depth, len(lst)):
        # entry(swap)
        lst[i], lst[depth] = lst[depth], lst[i]

        # go 1 more deep
        permutation(depth + 1)

        # back (Re-swap)
        lst[i], lst[depth] = lst[depth], lst[i]


lst = ["A", "B", "C"]
r = 1

result = [0] * r  # 어떤 값을 뽑았는지 출력을 위한
checklist = [0] * len(lst)

DFS(0)
# permutation(0)
