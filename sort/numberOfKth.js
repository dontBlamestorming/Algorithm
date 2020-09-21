/*
    K번째 수
    url: https://programmers.co.kr/learn/courses/30/lessons/42748
*/

/*
  Quick Sort(divide conquer - 분할정렬)
  한번 돌면 pivot을 기준으로 왼쪽은 작은 수, 오른쪽을 큰 수로 배열

  객체 - 참조(메모리에 값를 참조)
  정수(원시형데이터) - 값(복제)
*/

// quick sort
function swap(arr, a, b) {
  let temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[left];
  let i = left;
  let j = right;

  while (i < j) {
    while (pivot < arr[j]) j--;

    while (i < j && pivot >= arr[i]) i++;

    swap(arr, i, j);
  }

  arr[left] = arr[i];
  arr[i] = pivot;

  return i;
}

function quickSort(arr, begin, end) {
  if (begin >= end) {
    return;
  }

  let pi = partition(arr, begin, end);

  quickSort(arr, begin, pi - 1);
  quickSort(arr, pi + 1, end);
}

// bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function getSlicedArr(array, command) {
  let slicedArr = [];
  const start = command[0] - 1;
  const end = command[1];
  slicedArr = array.slice(start, end);

  /*
    slice 메서드를 안쓰는 경우
    let n = 0;
    if (start === end) {
      slicedArr[0] = array[start];
    } else {
      while (n < end) {
        slicedArr[n] = array[start + n];
        n++;
      }
    }
  */

  return slicedArr;
}

function customSorting(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

function solution(array, commands) {
  let answer = [];

  commands.forEach((command, index) => {
    const slicedArr = getSlicedArr(array, command);
    quickSort(slicedArr, 0, slicedArr.length - 1);
    const sortedArr = slicedArr;
    // quickSort의 output이 변수에 바로할당되지 않는 이유?

    answer[index] = sortedArr[command[2] - 1];
  });

  console.log(answer);

  return answer;
}

/*
  첫번 째 방법 
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
*/
