lst = [3, 1, 1, 2, 4, 9, 6, 11]


def merge(left, right):
    result = []

    # 즉, 작은 값을 먼저 넣고,
    while 0 < len(left) or 0 < len(right):  # left와 right 둘 다 값이 없어 질 때까지

        if 0 < len(left) and 0 < len(right):  # left와 right 둘 다 값이 있을 떄
            if left[0] <= right[0]:  # left가 더 작다면
                result.append(left[0])  # result 배열에 추가 후
                left = left[1:]  # left 길이를 0으로
                print("a")

            else:
                result.append(right[0])
                right = right[1:]
                print("b")

        elif 0 < len(left):
            result.append(left[0])
            left = left[1:]
            print("c")

        elif 0 < len(right):
            result.append(right[0])
            right = right[1:]
            print("d")

    return result


def divide(lst):

    if len(lst) <= 1:
        return lst

    mid = len(lst) // 2
    left = lst[:mid]
    right = lst[mid:]

    left = divide(left)
    right = divide(right)

    return merge(left, right)


print(divide(lst))
