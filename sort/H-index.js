/*
    H-index
    url: https://programmers.co.kr/learn/courses/30/lessons/42747
*/

// 결과 : 테스트 케이스 1개 오류
function solution(citations) {
  let answer = 0;

  for (let h = 1; h < citations.length + 1; h++) {
    let citedPapers = 0;
    let hIndex = 0;

    for (let j = 0; j < citations.length; j++) {
      if (h <= citations[j]) {
        citedPapers++;
      }
    }

    if (h <= citedPapers) {
      hIndex = h;
      answer = hIndex;
    }
  }

  return answer;
}

// function sort(arr) {
//   arr.sort((a, b) => {
//     return b - a;
//   });

//   return arr;
// }

// function solution(clitations) {
//   const decendedArr = sort(clitations);
//   console.log(decendedArr);
//   for (let i = decendedArr.length - 1; i >= 0; i--) {
//     // index
//     let numberOfPapers = 0;

//     for (let j = 0; j <= decendedArr.length; j++) {
//       if (i <= decendedArr[j]) {
//         numberOfPapers = numberOfPapers + 1;
//       }
//     }

//     if (numberOfPapers >= i) return i;
//   }
// }
