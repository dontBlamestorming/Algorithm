/*
    구명보트
    url: https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
*/

function solution(people, limit) {
  const arr = people.sort((a, b) => a - b); // 오름차순 정렬
  const length = arr.length;

  let start = 0;
  let end = length - 1; // 인덱스기준이기 때문
  let useOfBoat = 0;

  for (let i = 0; i < arr.length; i++) {
    if (start >= end) {
      break;
    }

    if (arr[start] + arr[end] <= limit) {
      useOfBoat++;
      start++;
      end--;
    } else {
      end--;
    }
  }

  return length - useOfBoat;
}

solution([120, 140, 60, 110, 80, 90, 100, 70, 40, 130, 50], 140); // expected result : 8
solution([70, 50, 80, 50], 100); // expected result : 3

/*
  처음 접근한 방식은 limit / 2를 기준으로 2개의 배열을 생성하여 2중 for문을 통해 최소값과 최대값순서로 더해 limit값과 비교하고
  결과값이 limit미만인 경우 원본배열에서 연산에 사용된 최대값과 최소값을 제거한 후 useOfBoat값을 1씩 증가시키려 했다.
  정답은 useOfBoat + 남은 배열의 length를 더하면 된다. 하지만 이 방법은 시간복잡도가 o(n^2)이기 때문에 만약 5만명이 입력될 경우
  효율성 테스트에서 떨어진다. 

  따라서 오름차순으로 정렬후 가장 왼쪽값부터 기준으로 가장 오른쪽 값에서부터 순차적으로 값을 비교하여 조건이 참일경우 useOfBoat값을 증가하고
  보트의 값을 구할 때 남은 인원기준이 아니라 보트의 사용 횟수를 기준으로 생각하면 'length - useOfBoat'로 계산된다. 이 방법의 시간복잡도는
  o(n)이다.
*/
