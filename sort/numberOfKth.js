/*
    K번째 수
    url: https://programmers.co.kr/learn/courses/30/lessons/42748


1. 첫번째 매개변수 배열의 i부터 j까지 자르고 오름차순 정렬
2. index k번의 수 리턴하여 answer에 푸쉬

i = commands[0][0], commands[1][0], commands[2][0]
j = commands[0][1], commands[1][1], commands[2][1]
k = commands[0][2], commands[1][2], commands[2][2]
*/

function solution(array, commands) {
  const answer = [];

  commands.forEach(command => {
    // array 자르기
    const slicedArr = array.slice(command[0] - 1, command[1]);

    slicedArr.sort((a, b) => {
      // 오름차순 정렬
      return a - b;
    });

    answer.push(slicedArr[command[2] - 1]);
  });

  return answer;
}
