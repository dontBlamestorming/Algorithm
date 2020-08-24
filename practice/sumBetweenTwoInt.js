/*
    두 정수 사이의 합
    url: https://programmers.co.kr/learn/courses/30/lessons/12912
*/

function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
    return answer;
  } else if (a === b) {
    return (answer = a);
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
    return answer;
  }
  return answer;
}
