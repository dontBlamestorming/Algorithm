/*
    문자열 다루기 기본
    url: hhttps://programmers.co.kr/learn/courses/30/lessons/12918
*/

function solution(s) {
  let answer = true;
  const length = s.length;

  if (length === 4 || length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) {
        answer = false;
      }
    }
  } else {
    answer = false;
  }

  return answer;
}
