function solution(m, n, v, connected) {
  const map = Array.from(Array(1001), () => Array(1001).fill(0));
  const visited = Array.from({ length: map.length }, () => false);
  let answerOfDfs = [];
  let answerOfBfs = [];

  // mapping
  connected.forEach((value) => {
    let x = value[0];
    let y = value[1];

    map[x][y] = 1;
    map[y][x] = 1;
  });

  function bfs(start) {
    function isEmpty(arr) {
      if (arr.length === 0) return true;
      return false;
    }

    let q = [];
    q.push(start);
    answerOfBfs.push(start);
    visited[start] = true;

    while (!isEmpty(q)) {
      let headNode = q.shift();
      for (let i = 1; i < map[headNode].length; i++) {
        if (map[headNode][i] && !visited[i]) {
          q.push(i);
          answerOfBfs.push(i);
          visited[i] = true;
        }
      }
    }
    return answerOfBfs;
  }

  function dfs(v, n) {
    answerOfDfs.push(v);
    visited[v] = true;

    for (let i = 1; i < map[v].length; i++) {
      if (map[v][i] && !visited[i]) {
        return dfs(i, n + 1);
      }
    }

    return answerOfDfs;
  }

  const resultOfBfs = bfs(v);
  const resultOfDfs = dfs(v, 0);
}

/*
let visited = Arry.from({ length: map.length }, () => false);

class Queue {
  constructor() {
    this.arr = [];
  }

  pushTail(item) {
    this.arr.push(item);
    console.log(item);
  }

  popHead() {
    return this.arr.shift();
  }

  isEmpty() {
    // queue가 비었는지 확인
    if (this.arr.length === 0) return true;
    return false;
  }
}

function bfs(n) {
  let queue = new Queue();
  queue.pushTail(n);
  visited[n] = true;

  while (!queue.isEmpty()) {
    let head = queue.popHead(); // Task 1 : queue에서 head를 pop
    for (let i = 1; i < map[head].length; i++) {
      // Task 2 : head에서 갈 수 있으면서, 방문한 적 없는 node를 방문
      if (map[head][i] && !visited[i]) {
        queue.pushTail(i);
        visited[i] = true;
      }
    }
  }
}

function solution() {
  let test = bfs(1);
  console.log(test);
}
*/
