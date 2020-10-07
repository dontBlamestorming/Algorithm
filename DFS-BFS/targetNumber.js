/*
    타겟 넘버
    url : https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
*/

/*
    DFS : Stack
    BFS : Queue

    노드는 두가지 정보를 담고있는데, 다른 노드와의 차별점을 두는 데이터와, 자식들과의 관계를 담고있는 정보다. 부모는 자식노드들의 ‘주소’를 갖고 있는다. 구현의 핵심은, 위에서 설명한 부모노드에 자식과의 관계(주소)를 어떻게 저장할 것인가? 에 대한 질문에서 시작된다.
*/

/*
k = 0                     1                   (최상위노드)
                 /                 \
k = 1           1                  -1  
            /       \           /       \
k = 2      1        -1         -1        1
         /  \     /   \      /   \     /   \
k = 3   1   -1   -1   1     -1   1    1    -1
       /\   / \  / \ / \   / \  / \  / \  / \
k = 4 1 -1 -1 1 -1 1 1 -1 -1 1 -1 1 1 -1 -1 1 
*/

function solution(numbers, target) {
  let answer = 0;
  dfs(0); // 최상위 부모 node

  function dfs(k) {
    if (k === numbers.length) {
      // stack에 쌓여있는 함수의 개수 + 1과 numbers의 길이가 같다면
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i]; // sum을 구하고

      if (sum === target) {
        // 모두 더한 값이 target과 같으면
        answer++; // 정답 1 증가
      }

      return;
    } else {
      numbers[k] = numbers[k] * 1;
      dfs(k + 1);

      numbers[k] = numbers[k] * -1;
      dfs(k + 1);
    }
  }

  return answer;
}

solution([1, 1, 1, 1, 1], 3);
