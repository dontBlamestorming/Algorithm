/*
    문자열 내 마음대로 정렬하기
    url: https://programmers.co.kr/learn/courses/30/lessons/12915
*/

function solution(strings, n) {
  const answer = [];

  // n번째 인덱스 값의 string을 앞으로 가져와서 answer배열에 푸쉬
  for (let i = 0; i < strings.length; i++) {
    const temp = strings[i][n];
    answer.push(temp + strings[i]);
  }

  // answer 정렬
  answer.sort();

  // 정렬에 사용한 n번째 인덱스 string 제거
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].replace(answer[i][0], "");
  }

  return answer;
}

// sort함수 사용하기

function solution2(strings, n) {
  let answer = strings;

  strings.sort((a, b) => {
    const stringA = a[n];
    const stringB = b[n];

    /*
    true = 1, false = 0
    a > b = true일 경우 1
    a < b = false일 경우 0
    ( a > b ) - ( a < b )는 1이므로 
    b를 a보다 낮은 색인으로 sort, 즉 b가 먼저 나오게 소트됨.
 */
    if (a === b) {
      return (a > b) - (a < b);
    } else {
      return (stringA > stringB) - (stringA < stringB);
    }
  });

  return answer;
}
