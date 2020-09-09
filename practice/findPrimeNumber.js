/*
    소수찾기
    url: https://programmers.co.kr/learn/courses/30/lessons/12921
*/

/**
 * 에라토스트테네스의 체
 * 주어진 n개의 숫자배열에서 합성수를 제거하는 방향으로
 * 어떤 수를 나누었을 때, 나머지가 0이 되게하는 수를 그 어떤 수의 약수라고 한다.
 * 소수는 1과 자신 이외에는 약수를 가지지 않는다.
 */

function solution(n) {
  let numbers = [];

  // 숫자들 배열로 만들기
  for (let i = 2; i <= n; i++) {
    numbers[i] = i;
  }

  /*
    i = 2 / j = 4 -> 6 -> 8 -> 10 ... 
    i = 3 / j = 6 -> 9 -> 12 -> 15 ...
    i = 4 / j = 8 -> 12 -> 16 -> 20 ...
    i = 5 / j = 10 -> 15 -> 20 -> 25 ...
    i = 6 / j = 12 -> 18 -> 24 -> 30 ...
    i = 7 / j = 14 -> 21 -> 28 -> 35 ...
    i = 8 / j = 16 -> 24 -> 32 -> 40 ...
  */

  // n만큼의 숫자 배열에서 합성수 0으로 만들기
  for (let i = 2; i <= n; i++) {
    for (let j = 2 * i; j <= n; j += i) {
      numbers[j] = 0;
    }
  }

  const primeNumber = numbers.filter(number => number !== 0);
  return primeNumber.length;
}
