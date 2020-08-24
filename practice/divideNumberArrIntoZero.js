/*
    나누어 떨어지는 숫자 배열
    url: https://programmers.co.kr/learn/courses/30/lessons/12910
*/

function solution(arr, divisor) {
  const sortedArr = arr.sort((a, b) => a - b);
  let answer = [];
  let isArrayEmpty = true;

  for (let i = 0; i < sortedArr.length; i++) {
    if (!(sortedArr[i] % divisor)) {
      answer.push(sortedArr[i]);
      isArrayEmpty = false;
    }
  }

  if (isArrayEmpty) {
    answer = [-1];
  }

  return answer;
}
