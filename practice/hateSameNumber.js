/*
    같은 숫자는 싫어
    url: https://programmers.co.kr/learn/courses/30/lessons/12906
*/

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      let temp = arr[i];
      answer.push[temp];
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}
