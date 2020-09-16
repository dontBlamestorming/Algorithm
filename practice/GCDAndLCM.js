/*
    최대공약수와 최소공배수
    url: https://programmers.co.kr/learn/courses/30/lessons/12940
*/

/**
 * 세번째 방법
 * 유클리드 호제법 - 재귀함수
 */

// 최대공약수 구하는 재귀함수
function getMaxDiv(number, remainder) {
  let _remainder = number % remainder;

  if (remainder === 0) {
    return number; // 여기가 읽히면 이 재귀함수는 종료
  } else {
    return getMaxDiv(remainder, _remainder);
  }
}

function solution(n, m) {
  const biggerNum = Math.max(n, m);
  const smallerNum = Math.min(n, m);
  const remainder = biggerNum % smallerNum;

  let maxDiv = 0;
  let minMul = 0;

  maxDiv = getMaxDiv(smallerNum, remainder);

  // 최소공배수
  let nCoprime = n / maxDiv;
  let mCoprime = m / maxDiv;

  minMul = maxDiv * nCoprime * mCoprime;
  return [maxDiv, minMul];
}

/**
 * 첫번째 방법
 * 서로소란?
 * 두 수 a, b의 공약수가 1밖에 없을 때 이 두 수를 서로소라고 한다. (= 최대공약수가 1이다.)
 
function solution(n, m) {
  const nDiv = [];
  const mDiv = [];
  const sameDiv = [];
  let maxDiv = 0;
  let minMul = 0;
  let nCoprime = 0;
  let mCoprime = 0;

  // n의 약수
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      nDiv.push(i);
    }
  }

  // m의 약수
  for (let i = 0; i <= m; i++) {
    if (m % i === 0) {
      mDiv.push(i);
    }
  }

  // n과 m의 공약수
  for (let i = 0; i < nDiv.length; i++) {
    for (let j = 0; j < mDiv.length; j++) {
      if (nDiv[i] === mDiv[j]) {
        sameDiv.push(nDiv[i]);
      }
    }
  }

  // 최대공약수
  for (let i = 0; i < sameDiv.length; i++) {
    if (maxDiv < sameDiv[i]) {
      maxDiv = sameDiv[i];
    }
  }

  // 최소공배수
  nCoprime = n / maxDiv;
  mCoprime = m / maxDiv;

  minMul = maxDiv * nCoprime * mCoprime;

  return [maxDiv, minMul];
}
*/

/**
 * 두번째 방법
 
function solution(n, m) {
  let maxDiv = 1;
  let range = Math.min(n, m);
  // 최대공약수는 두 수 n, m에서 작은 수의 약수이기 때문에 그 수보다 작다.
  let nCoprime = 0;
  let mCoprime = 0;
  let minMul = 0;

  for (let i = 0; i <= range; i++) {
    if (n % i === 0 && m % i === 0) {
      maxDiv = i;
    }
  }

  nCoprime = n / maxDiv;
  mCoprime = m / maxDiv;

  minMul = maxDiv * nCoprime * mCoprime;

  return [maxDiv, minMul];
}
*/
