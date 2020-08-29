/*
    완주하지 못한 선수
    url: https://programmers.co.kr/learn/courses/30/lessons/42576
*/

function solution(participant, completion) {
  let answer = "";

  // 참가자와 완주자 배열 병합
  const sumArr = participant.concat(completion);
  let person = {};

  // hash table 생성 - sumArr를 돌면서 중복된 이름이 있는 경우 value값 1씩 증가
  sumArr.forEach(runner => {
    if (person[runner]) {
      person[runner]++;
    } else {
      person[runner] = 1;
    }
  });

  // 참가 후 완주한 경우 2로 나눌 때 0으로 떨어짐
  // 동명이인이나 참가 후 완주를 못한 경우는 홀수
  for (let runner in person) {
    if (person[runner] % 2 !== 0) {
      return (answer = runner);
    }
  }

  return answer;
}
