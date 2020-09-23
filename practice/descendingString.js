/*
    문자열 내림차순으로 배치하기
    url: https://programmers.co.kr/learn/courses/30/lessons/12916#
*/

function solution(s) {
  let stringArr = s.split("");
  const answer = stringArr
    .sort()
    .reverse()
    .join("");
  return answer;
}
