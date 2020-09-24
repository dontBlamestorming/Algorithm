/*
    carpet
    url: https://programmers.co.kr/learn/courses/30/lessons/42842
*/

function solution(brown, yellow) {
  const numOfBoxes = brown + yellow; // 카펫의 박스의 개수 -> 총 개수의 약수값이 가능한 가로 X 세로 값
  const condition = Math.floor(numOfBoxes / 2); // 자기 자신과 대응되는 수는 1밖에 없기 때문에 총 개수 / 2

  for (let i = condition; i > 0; i--) {
    if (numOfBoxes % i !== 0) continue; // i가 numOfBoxes 약수가 아닌 경우엔 그냥 다시 루핑

    // 약수인 경우
    const width = i;
    const hight = numOfBoxes / i;
    // wh = numOfBoxes -> h = numOfBoxes / i;

    const numberOfBrown = 2 * width + 2 * hight - 4; // 4는 맞물리는 꼭지점 4개

    // y는 고정, brown의 개수에 따라 정사각형 or 직사각형 결정
    if (brown === numberOfBrown) {
      return [width, hight];
    }
  }
}
