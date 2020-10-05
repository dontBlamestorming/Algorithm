/*
    큰 수 만들기
    url: https://programmers.co.kr/learn/courses/30/lessons/42883
*/

/*
  첫번 째 방법
  1. 개인적인 생각으로는 제일 greedy한 방법이 아닌가 싶다.
  2. 단순히 문자열을 순서대로 돌면서 앞의 값이 뒤에값보다 작은경우 앞의값을 삭제하고 i값을 초기화한다.
  3. for문의 종료조건은 countDel가 k와 같아진 경우다. 하지만 예외케이스가 많다.
  3-1. countDel이 k와 같아지지 않는 경우(즉 입력된 값이 모두 같은경우)
  3-2. 입력값이 "99991", "11119", "91111", "19999"와 같은 예외케이스를 모두 적용해야한다.
  4. 프로그래머스 기준 테스트케이스 10(시간초과), 12(실패) 에러를 잡아야 한다.
*/
function solution(number, k) {
  let countDel = 0;
  for (let i = -1; i < number.length; i++) {
    if (number[i] < number[i + 1]) {
      number = number.replace(number[i], "");
      countDel++;
      i = -1;
    }

    // escape
    if (countDel === k) {
      return number;
    }

    // 같은 숫자만 들어왔을 때 escape
    if (i === number.length - 1) {
      number = number.substring(0, k);
      return number;
    }
  }
}

/*
두번 째 방법
time complex : o(n^2)

function makeBiggerNumber(number, k) {
  let answer = "";
  let strNumArr = number.split("");
  let len = strNumArr.length;
  let start = 0;
  let end = k + 1;

  while (end <= len) {
    let slicedArr = strNumArr.slice(start, end);
    let maxVal = Math.max(...slicedArr).toString();
    let indexOfMaxVal = slicedArr.indexOf(maxVal) + start;

    answer += maxVal;
    start = indexOfMaxVal + 1;
    end += 1;
  }

  return answer;
}
*/

/* 
세번 째 방법
time complex : o(n)

1. 주어진 숫자 string에서 k개의 수를 제거한다고 가정하기 때문에 끝에서 k개수를 제외한 string에서
loop돌고, 그 중에서 최대값을 answer에 할당한다.
2. 이 최대값은 k개의 수를 제거한 숫자에서 첫번째에 올 숫자이기 때문에 뒤에서 제거했다고 가정한 숫자에서
해당 값보다 큰 숫자가 나와도 의미가 없다.
3. idx를 기록한 다음 최댓값 다음 숫자부터 k-1이전까지 loop를 돌며 최대값을 찾는다.
4. 반복

function getMaxFromSubstring(arr, begin, end) {
  let idx = -1;
  let max = -1;

  for (let i = begin; i < end; i++) {
    if (max === 9) break;
    if (max < parseInt(arr[i])) {
      max = parseInt(arr[i]);
      idx = i;
    }
  }

  return { idx: idx, max: max };
}

function makeBiggerNumber(number, k) {
  let answer = "";
  let begin = 0;

  for (let end = k; end < number.length; end++) {
    let res = getMaxFromSubstring(number, begin, end + 1);
    begin = res.idx + 1;
    answer += res.max;
  }

  return answer;
}
*/
