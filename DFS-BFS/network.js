/*
    네트워크
    url : https://programmers.co.kr/learn/courses/30/lessons/43162
*/

/*
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

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  for (let i = 0; i < n; i++) {
    visited.push(false);
  }

  function dfs(k) {
    visited[k] = true;
    for (let i = 0; i < n; i++) {
      if (computers[k][i] === 1 && !visited[i]) {
        //
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
