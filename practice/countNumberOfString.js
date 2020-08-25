/*
    문자열 내 p와 y의 개수
    url: https://programmers.co.kr/learn/courses/30/lessons/12916#
*/

function solution(s) {
  let countOfP = 0;
  let countOfY = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      countOfP++;
    } else if (s[i] === "y" || s[i] === "Y") {
      countOfY++;
    }
  }

  if (countOfP === countOfY) return true;

  return false;
}
