
def get_LCS(a, b, lst):
    lcs = 0

    for i in range(len(a)):

        for j in range(len(b)):

            if a[i] == b[j]:  # 비교하려는 두 글자가 같다면
                lst[i + 1][j + 1] = lst[i][j] + 1
                # lst[i][j] = 이전문자까지와의 lcs 수 + 1
                lcs = max(lcs, lst[i + 1][j + 1])
            else:  # 글자가 다르다면
                lst[i + 1][j + 1] = max(lst[i][j+1], lst[i + 1][j])

    return lcs


def main():
    first_str = list(str(input()))
    second_str = list(str(input()))

    lst = [[0 for _ in range(len(first_str) + 1)]
           for _ in range(len(second_str) + 1)]

    result = get_LCS(first_str, second_str, lst)
    print(result)


main()

'''
i = 0, j = 0
[       A  C  A  Y  K  P
    [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 0, 0, 0, 0, 0, 0],
  P [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 0, 0, 0, 0, 0, 0],
  K [0, 0, 0, 0, 0, 0, 0]
]

i = 0, j = 1 ~> LCS = 1
[       A  C  A  Y  K  P
    [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 1, 0, 0, 0, 0, 0],
  P [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 0, 0, 0, 0, 0, 0],
  K [0, 0, 0, 0, 0, 0, 0]
]

i = 0, j = 2
[       A  C  A  Y  K  P
    [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 1, 0, 0, 0, 0, 0],
  P [0, 1, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 0, 0, 0, 0, 0, 0],
  K [0, 0, 0, 0, 0, 0, 0]
]

i = 0, j = 3
[       A  C  A  Y  K  P
    [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 1, 0, 0, 0, 0, 0],
  P [0, 1, 0, 0, 0, 0, 0],
  C [0, 1, 0, 0, 0, 0, 0],
  A [0, 0, 0, 0, 0, 0, 0],
  K [0, 0, 0, 0, 0, 0, 0]
]

i = 0, j = 4 ~ LCS = `
[       A  C  A  Y  K  P
    [0, 0, 0, 0, 0, 0, 0],
  C [0, 0, 0, 0, 0, 0, 0],
  A [0, 1, 0, 0, 0, 0, 0],
  P [0, 1, 0, 0, 0, 0, 0],
  C [0, 1, 0, 0, 0, 0, 0],
  A [0, 1, 0, 0, 0, 0, 0],
  K [0, 0, 0, 0, 0, 0, 0]
]

'''
