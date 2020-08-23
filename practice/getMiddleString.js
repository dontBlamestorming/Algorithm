/*
    가운데 글자 가져오기
    url: https://programmers.co.kr/learn/courses/30/lessons/12903
*/

function solution(s) {
  let answer = "";
  const numberOfString = s.length;

  if (numberOfString % 2 === 0) {
    answer = s.charAt(numberOfString / 2 - 1) + s.charAt(numberOfString / 2);
  } else {
    answer = s.charAt(numberOfString / 2);
  }
  return answer;
}

/*
    채점 결과
    정확성: 56.3
    합계: 56.3 / 100.0

    function isEven(value){
        if (value % 2 === 0) {
            return true; // 짝수
        }
        else {
            return false; // 홀수
        }
    }

    function getIndex(s) {
        const numberOfString = s.length;
        console.log("numberOfString = ", numberOfString);
        
        const targetIndex = isEven(numberOfString) ? Math.floor((numberOfString -1) / 2) :  Math.floor(numberOfString / 2)
        console.log("targetIndex = ", targetIndex);
        
        return targetIndex;
    }

    function solution(s) {
        const index = getIndex(s);
        console.log("index = ", index);
        
        let answer = isEven(index) ? s.charAt(index): s.charAt(index) + s.charAt(index+1);
        
        return answer;
    }
*/
