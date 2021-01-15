/*
    2 x n 타일링
    url: https://programmers.co.kr/learn/courses/30/lessons/12900
*/

/*
    다이나믹 프로그래밍이란 하나의 문제를 단 한 번만 풀도록 하는 알고리즘이다.
    - 분할 정복 기법은 '정렬'과 같은 몇몇 요소에 대해서는 동일한 문제를 다시 풀게된다는 단점이 없다.
    
    퀵, 병합정렬은 빠르지만 단순 분할 정복으로 풀게되면 심각한 비효율성을 낳는다. 대표적인 것이 피보나치 수열이다.
    피보나치 수열의 점화식 : D[i] = D[i-1] + D[i-2] => 특정 숫자는 그 특정 숫자 앞의 2칸에 있는 숫자의 합
    이 점화식에서 단순 분할 정복이 왜 비효율적인지 생각해보자. 예를들어서 D[15]를 구해야 한다고 가정하면 D[15]를 구하기 위해선
    D[14]와 D[13]이 필요하다. 그리고 D[14]를 구하기 위해서는 D[13], D[12]가 필요하고, D[13]은 D[12]와 D[11]이 필요하다.
    즉, D[15]를 구하기 위한 방법(문제)가 하위로 갈수록 반복되고 있는 것이다.
    
    따라서 이럴 때는 동적 프로그래밍 기법을 사용해야 한다.

    1. 큰 문제를 작은 문제로 나눌 수 있다. => D[15]를 구하는 큰 문제는 D[14], D[13]을 구하는 것으로부터 시작한다.
    2. 작은 문제에서 구한 정답의 메커니즘이 그것을 포함하는 큰 문제에서도 동일하다. => D[14], D[13]이 있어야(작은 문제) D[15](큰 문제)를 구할 수 있다.

    즉, 큰 문제는 잘게 나누어서 해결한 뒤 나중에 그 값을 단순히 '제시'하여 전체의 답을 구하는 것이다.
    이미 계산한 결과는 배열에 저장(Memoization)함으로써 나중에 동일한 메커니즘의 계산에서는 저장된 값을 단순히 반환하기만 하면 되는 것

    시간복잡도를 계산해보자. D[n]를 구하기 위해 몇번의 계산을 해야할까? 입체적으로 생각해보면, n은 n-1, n-2가 필요하고 n-1은 (n-1)-1과 (n-1)-2가 필요하고, 쭉쭉 내려가다보면 높이는 n이 된다고 할 수 있다. 그럼 연산의 개수가 1, 2, 4, 8 ... 씩 증가한다고 볼 수 있다. (2^0, 2^1, 2^2, 2^3, 2^4 ...) 즉, 연산의 개수가 2^n씩 증가한다. 이 식의 시간복잡도는 O(2^n)이 된다. 만약 D[50]을 구하려면 연산의 개수는 2^50이 된다. 2^10 = 1000이고, 10제곱일 때 0이 3개니까, 2^50 = 1000000000000000 만큼 연산해야 한다. 따라서 우리는 밑의 함수를 개선할 필요가 있다. 즉 한번 연산이 끝난 문제(D[number])의 경우에는 배열에 저장하여 다시 그 값이 필요한 경우는 단지 '반환'만 하는 것이다. 
*/

let memoArr = Array.from({ length: 10 }, () => 0);

function dp(x) {
  // console.log(memoArr, x);
  if (x === 1) return 1;
  if (x === 2) return 1;
  if (memoArr[x] != 0) {
    return memoArr[x];
  }

  // 배열에 해당 인덱스의 값이 0 아니라면(즉, 한번 연산되어 값이 저장된 상태라면) 그 값을 반환
  // 이 함수에서는 dp(n)을 시작하기 '전'에 배열에서 값이 있는지 찾는다!!

  return (memoArr[x] = dp(x - 1) + dp(x - 2));
}

// console.log(dp(5));

/*  
    dp(5)을 찾아보자!
    dp(5) ? dp(4) ? dp(3) ? dp(2) + dp(1) ->
    dp(1), dp(2), dp(3)의 값을 알잖아? dp(5)를 구하려면 dp(4)와 dp(3)을 알아야 하는데 
    이미 알아내어서 배열에 저장되어 있는 것을 연산할 필요가 X
    즉, D[n]을 구하기 위해서는 D[n-1]과 그 하위의 D[n-2]으로 계산을 하고, 하위의 D[n-2]는 배열에 저장되어 있기 때문이다.
    따라서 연산 횟수는 한 줄기를 아예 연산할 필요가 없기 때문에 n이 되고, 시간복잡도는 O(n)이 된다. 

    dp(4) + dp(3) = dp(5) = memoArr[4] + memoArr[3]
    dp(3) + dp(2) = dp(4) = memoArr[4]
    dp(2) + dp(1) = dp(3) = memoArr[3]
*/

// console.log(dp(50));

// Tile - 가로 2, 세로 1의 크기
// 위의 타일로 가로 n, 세로 2크기의 타일을 채우려고 하는데
// n이 주어질 때, 갖고있는 tile로 채울 수 있는 방법의 수

// n <= 60,000

// let memoArr = Array(100).fill(0);

/*
지연
런타임 에러
function solution(n) {
  var answer = 0;
  const divider = 1000000007;
  if (n == 1) return 1;
  if (n == 2) return 2;

  let arr = Array(n + 1).fill(-1);
  arr[1] = 1;
  arr[2] = 2;
  function rect(n) {
    if (arr[n] === -1) {
      arr[n] = (rect(n - 1) + rect(n - 2)) % divider;
    }
    return arr[n];
  }
  answer = rect(n);

  return answer;
}

굿
function solution(n) {
  var answer = 0;
  const divider = 1000000007;
  if (n == 1) return 1;
  if (n == 2) return 2;

  let arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    let nth = arr[i - 1] + arr[i - 2];
    arr.push(nth % divider);
  }
  answer = arr[arr.length - 1];

  return answer;
}
*/

// 런타임 에
// 테스트케이스는 dp(52)까지 잘나오는것같은데
function solution(n) {
  //memoization
  let memoArr = Array(n + 1).fill(0);

  function dp(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (memoArr[n] != 0) {
      // 이게 왜 읽히지?
      return memoArr[n];
    }

    let a = dp(n - 2);
    let b = dp(n - 1);
    memoArr[n] = (a + b) % 1000000007;
    return memoArr[n];
  }

  let result = dp(n); // 음수처리??
  console.log("result : ", result);
}

solution(52);
