/*
    위장
    url: https://programmers.co.kr/learn/courses/30/lessons/42578

    point : 스파이가 몇 가지 type의 옷을 입었는지를 생각하지 말자. 3가지 type의 옷의 값 중에서 '경우의 수'는 결국 A x B x C이다. 생각을 연역적으로 해라. 
*/

function solution(clothes) {
  let answer = 1;

  function makeHashTable(clothes) {
    let clothesObj = {};

    clothes.forEach(cloth => {
      if (clothesObj[cloth[1]]) {
        clothesObj[cloth[1]].push(cloth[0]);
      } else {
        clothesObj[cloth[1]] = [cloth[0]];
      }
    });

    return clothesObj;
  }

  function countNumOfCases(clothes) {
    let table = makeHashTable(clothes);
    const types = Object.keys(table);

    for (let i = 0; i < types.length; i++) {
      answer = answer * (table[types[i]].length + 1);
    }

    return answer;
  }

  answer = countNumOfCases(clothes);

  return answer - 1;
}
