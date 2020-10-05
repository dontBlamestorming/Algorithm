/*
    체육복
    url: https://programmers.co.kr/learn/courses/30/lessons/42862
*/

function solution(n, lost, reserve) {
  let answer = 0;
  let canHelp = 0;

  // lost와 reserve가 중복된 학생의 경우를 제외
  let arrOfStolen = lost.filter((value) => !reserve.includes(value));
  let arrOfPossessed = reserve.filter((value) => !lost.includes(value));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < arrOfStolen.length; j++) {
      if (i === arrOfStolen[j]) {
        // n번째 학생이 stolen 명단에 있는 경우
        for (let z = 0; z < arrOfPossessed.length; z++) {
          // possessed하고 있는 학생의 명단을 보는데
          if (
            arrOfStolen[j] + 1 === arrOfPossessed[z] ||
            arrOfStolen[j] - 1 === arrOfPossessed[z]
          ) {
            // 만약 해당 학생의 앞뒤로 여벌의 체육생이 있는 학생이 있는 경우
            canHelp++; // 강제로 도와줌
            // arrOfPossessed.splice(z, 1); // 옷을 빌려줬기 때문에 배열에서 제거 -> 안하면 그 다음 연산에서 중복발생
            break;
          }
        }
      }
    }
  }
  // 체육수업 참여 가능 학생 수 = 전체 학생수 - 체육복을 도둑맞은 학생 수 + 체육복을 빌린 학생 수
  return (answer = n - arrOfStolen.length + canHelp);
}

/* 
  시간복잡도 - o(n^3)이지만 최대 들어올 수 있는 input값을 고려해 보았을 때 충분히 연산 가능한 방법이다. 하지만 개선이 필요한 것은 사실이다.
*/
