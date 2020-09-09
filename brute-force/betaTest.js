/*
    모의고사
    url: https://programmers.co.kr/learn/courses/30/lessons/42840#
*/

function solution(answers) {
  const person = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  };

  let countArr = [];

  function checkAnswers(answers, arr) {
    let count = 0;
    let pickStart = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === arr[pickStart]) {
        count++;
      }

      pickStart++;

      if (pickStart === arr.length) {
        pickStart = 0;
      }
    }

    countArr.push(count);
  }

  for (let key in person) {
    let pickArr = person[key];
    checkAnswers(answers, pickArr);
  }

  let answer = [];
  let max = 0;
  for (let i = 0; i < countArr.length; i++) {
    if (max < countArr[i]) {
      max = countArr[i];
    }
  }

  for (let i = 0; i < countArr.length; i++) {
    if (max === countArr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}
