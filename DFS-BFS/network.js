/*
    네트워크
    url : https://programmers.co.kr/learn/courses/30/lessons/43162
    종합적으로 결국 독립적인 그래프가 몇개인지를 물어보는 문제
*/

/*
    [DFS]
    =========================================================================
    첫번 째 예제

    solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1],]);

    visited = [false, false, false]
    start!
    dfs(0) : visited = [true, false, false]
    computers[0][0] => X
    computers[0][1] => dfs(1) : visited = [true, true, false]
                      computers[1][0] => X
                      computers[1][1] => X
                      computers[1][2] => X
    computers[0][2] => X 
    >>> answer++
    
    dfs(1) => X(이미 방문한 노드)

    dfs(2) : visited = [true, true, true]
    computers[2][0] => X
    computers[2][1] => X
    computers[2][2] => X
    >>> answer++

    =========================================================================
    두번 째 예제

    solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1],]);

    visited = [false, false, false]
    start!
    dfs(0) : visited = [true, false, false]
    computers[0][0] => X
    computers[0][1] => dfs(1) : visited = [true, true, false]
                      computers[1][0] => X
                      computers[1][1] => X
                      computers[1][2] => dfs(2) : visited = [true, true, true]
                                        computers[2][0] => X
                                        computers[2][1] => X
                                        computers[2][2] => X
    computers[0][2] => X 
    >>> answer++

    dfs(1) => X(이미 방문한 노드)
    dfs(2) => X(이미 방문한 노드)
*/

// function solution(n, computers) {
//   let answer = 0;
//   const visited = [];

//   for (let i = 0; i < n; i++) {
//     visited.push(false);
//   }

//   function dfs(k) {
//     visited[k] = true;
//     for (let j = 0; j < n; j++) {
//       if (computers[k][j] === 1 && !visited[j]) {
//         dfs(j);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (!visited[i]) {
//       dfs(i);
//       answer++;
//     }
//   }

//   return answer;
// }

// BFS
class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(item) {
    this.store.push(item);
  }

  dequeue() {
    return this.store.shift();
  }

  isEmpty() {
    if (this.store.length === 0) return true;
    return false;
  }
}

function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => false);
  let q = new Queue();

  // 주어진 컴퓨터 한대씩 bfs로 탐색
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      bfs(i);
    }
  }

  function bfs(start) {
    q.enqueue(start); // start node push

    while (!q.isEmpty()) {
      // q의 값이 없을때까지 돌릴것
      let popedNode = q.dequeue(); // node를 하나 출력
      visited[popedNode] = true; // 해당 노드에 대한 visted 처리

      for (let i = 0; i < computers[popedNode].length; i++) {
        // 탐색중인 해당 컴퓨터와 타 컴퓨터간의 연결정보를 탐색
        if (computers[popedNode][i] === 1 && !visited[i]) {
          // '1'은 타 컴퓨터와 연결되어있다는 것 && 타 컴퓨터와 연결되어 있으면 visited처리를 하는데 타 컴퓨터와 연결되어 있는지 정보를 확인하는 visited
          q.enqueue(i);
        }
      }
    }
  }

  return answer;
}
