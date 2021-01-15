/*
 토마토(7576번)
 백준(BOJ)
 url : https://www.acmicpc.net/problem/7576
*/

function solution(m, n, box) {
  let answer = 0;
  let visited = Array.from(Array(n), () => Array(m).fill(false));

  let q = [];

  function isEmpty(arr) {
    if (arr.length === 0) return true;
    return false;
  }

  function bfs(start) {
    let day = 0;

    // q.push(start);
    // visited[start] = true;

    // 주어진 box에서 익은 토마토의 위치를 get
    box.forEach((line, index) => {
      for (let i = 0; i < line.length; i++) {
        if (line[i] === 1) {
          q.push([index, i]);
        }
      }
    });

    while (!isEmpty(q)) {
      let popedNode = q.shift();

      visited[popedNode[0]][popedNode[1]] = true;

      for (let i = 0; i < box[popedNode].length; i++) {
        if (box[popedNode][i] === 1 && !visited[i]) {
          q.push();

          if (box[popedNode][i - 1] === 0) {
            box[popedNode][i - 1] = 1;
          }
          if (box[popedNode - 1][i] === 0) {
            box[popedNode - 1][i] = 1;
          }
        }
      }
    }
  }

  bfs(0);
}

solution(6, 4, [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
]);
