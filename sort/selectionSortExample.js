// time complex: O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 반복
    let selected_value = arr[i]; // 특정 수 선택
    let minValue = 100000;
    let minIdx = -1;
    for (let j = i + 1; j < arr.length; j++) {
      // 선택한 수 바로 다음 수 ~ 끝까지 array 탐색
      if (arr[j] < minValue) {
        // 최솟값 찾기
        minValue = arr[j];
        minIdx = j;
      }
    }
    // 최솟값 찾앗으면 선택한 수랑 교체
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  return arr; // result : [4, 5, 2, 6, 11, 34, 35, 77, 662, 3421];
}

selectionSort([2, 4, 6, 11, 35, 77, 34, 662, 3421, 5]);
