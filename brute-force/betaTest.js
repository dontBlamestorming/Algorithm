/*
    모의고사
    url: https://programmers.co.kr/learn/courses/30/lessons/42840#
*/

function checkAnswers(answers, pickArr) {
  let count = 0; // 정답 개수
  let pickStart = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pickArr[pickStart]) {
      count++;
    }

    pickStart++;

    if (pickStart === pickArr.length) {
      // pickArr로 answers 배열을 다 돌기 위한 장치
      pickStart = 0;
    }
  }

  return count;
}

function solution(answers) {
  let answer = [];
  let countArr = []; // 각 수포자들의 정답 개수들
  let max = 0; // 가장 많이 맞은 수포자 정답의 수

  const persons = {
    // 수포자들이 찍는 방식의 hash
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  for (let key in persons) {
    // 각 수포자들이 정답을 찍는 방식을 기준으로 채점
    numOfAnswers = checkAnswers(answers, persons[key]);
    countArr.push(numOfAnswers);
  }

  for (let i = 0; i < countArr.length; i++) {
    // 정답수의 최댓값
    if (max < countArr[i]) {
      max = countArr[i];
    }
  }

  for (let i = 0; i < countArr.length; i++) {
    // 가장 정답이 많은 수포자(들)을 answer배열에 idx로 push
    if (max === countArr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}
