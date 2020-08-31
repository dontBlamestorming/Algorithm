/*
    위장
    url: https://programmers.co.kr/learn/courses/30/lessons/42578

    정확성: 28.6
    합계: 28.6 / 100.0

    문제점 - 옷의 type이 많아질 때, type에 하나의 값만 들어온다면 그 옷과 다른 type의 옷의 경우의 수를 커버하지 못하고 있음
*/

function solution(clothes) {
  let answer = 0;

  function makeHashTable(clothes) {
    let clothesObj = {};

    clothes.forEach(cloth => {
      if (clothesObj[cloth[1]]) {
        clothesObj[cloth[1]].push(cloth[0]);
      } else {
        clothesObj[cloth[1]] = [cloth[0]];
      }
    });

    console.log("hash table is : ", clothesObj);
    return clothesObj;
  }

  function countNumOfCases(clothes) {
    let table = makeHashTable(clothes);
    const types = Object.keys(table);
    let whenOne = 0;
    let whenCom = 1;

    for (let i = 0; i < types.length; i++) {
      if (types.length === 1) {
        whenOne = whenOne + table[types[i]].length;
        return whenOne;
      } else {
        console.log(table[types[i]].length);
        whenOne = whenOne + table[types[i]].length;
        whenCom = whenCom * table[types[i]].length;
      }
    }

    return whenOne + whenCom;
  }

  answer = countNumOfCases(clothes);

  return answer;
}

/*
참고 코드
function solution(clothes) {
  let answer = 0;
  let types = [];
  let typeInd;

  clothes.forEach(cloth => {
    typeInd = typeIndexOf(types, cloth[1]); // -1 -> 0

    if (typeInd === -1) {
      types.push([cloth[1], 1]); // 옷종류에 1을 붙여서 배열에 삽입
    } else {
      types[typeInd][1]++; // 옷 종류 뒤에 숫자가 1씩 증가
      // [ [ 'headgear', 2 ] ]
    }

    if (types.length > 0) {
      answer = 1;
      types.forEach(type => {
        answer = answer * (type[1] + 1);    // 어떻게 이런 생각을 하지?
      });
      answer = answer - 1;
    }
  });

  return answer;
}

function typeIndexOf(types, type) {
  // types는 처음엔 빈배열이라서 return -1
  let answer = -1;

  for (let i = 0; i < types.length; i++) {
    if (types[i][0] === type) {
      // 두번째부터 옷의 종류가 같다면,
      answer = i; // i는 일단 0
      break;
    }
  }

  return answer;
}
*/
