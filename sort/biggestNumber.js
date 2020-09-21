/*
    가장 큰 수 
    url: https://programmers.co.kr/learn/courses/30/lessons/42746 
    sort -> 두개의 인자 a, b를 뺀 결과가 0보다 크면 순서를 바꾼다.
*/

function swap(arr, a, b) {
  let temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

function partition(arr, begin, end) {
  let pivot = arr[begin]; // 3
  let left = begin;
  let right = end;

  //=================================== 자 이까지는 위치값

  while (left < right) {
    // 0 < 4
    while (pivot < arr[right]) right--; // condition이 ture가 아니라면, pivot값과 오른쪽에서 찾아들어가는 값이 같거나 혹은 pivot보다 작은경우 -> 그 값의 위치값 right 고정 => 즉, pivot과 같거나 작은값을 찾으면 right 고정
    while (left < right && pivot >= arr[left]) left++; // 후 왼쪽에서 값을 찾아들어가는데, 왼쪽 값 중 하나가 pivot보다 크다면 거기서 left값 고정

    swap(arr, left, right); // 위에서 고정시킨 값들끼리 위치 swap

    // 즉, pivot을 기준으로 오른쪽에는 큰 값, 왼쪽은 작은 값 = 오름차순 정렬
  }

  //====================================

  // 위의 과정이 끝나면? -> left와 right가 만나는 지점
  arr[begin] = arr[left];
  pivot = arr[begin];

  return left;
}

function quickSort(arr, begin, end) {
  if (begin >= end) return; // 0 >= 4

  const pi = partition(arr, begin, end);

  quickSort(arr, begin, pi - 1);
  quickSort(arr, pi + 1, end);
}

function solution(numbers) {
  var answer = "";

  const strNumbers = numbers.map(number => number.toString());
  quickSort(strNumbers, 0, numbers.length - 1); // 0, 4

  return answer;
}

solution([3, 30, 34, 5, 9]);

/*
결과 : 틀림(시간초과)
time complex: O(n^2)

function solution(numbers) {
  let answer = "";
  for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers.length - 1; j > 0; j--) {
      // 시작점이 매우 중요
      let strA = numbers[j].toString();
      let strB = numbers[j - 1].toString();
      let sumAB = strA + strB;
      let sumBA = strB + strA;

      if (+sumAB > +sumBA) {
        let temp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = temp;
      }
    }
  }

  answer = numbers.join("");

  if (+answer === 0) "0";
  return answer;
}

solution([3, 30, 34, 5, 9]);
*/
