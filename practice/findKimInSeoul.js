/*
    서울에서 김서방 찾기
    url: https://programmers.co.kr/learn/courses/30/lessons/12919
*/

function solution(seoul) {
  let answer = "";
  let indexOfKim = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      indexOfKim = i;
    }
  }

  return (answer = `김서방은 ${indexOfKim}에 있다`);
}

/*
    내장 함수 이용하기

    function solution(seoul) {
        const index = seoul.indexOf("Kim");
        return `김서방은 ${index}에 있다`;
    }
*/
