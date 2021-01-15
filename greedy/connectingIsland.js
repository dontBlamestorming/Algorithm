/*
    섬 연결하기
    url: https://programmers.co.kr/learn/courses/30/lessons/42861
*/

/*
    n개의 섬 사이에 다리를 건설하는 비용(cost)가 주어질 때, 최소비용으로 모든 섬이 서로 통행가능하도록 만들어라
    1 <= n <= 100

    크루스칼 알고리즘
    가장적은 비용으로 모든 노드를 연결
    노드 = 정점 = 도시 : 동그라미부분
    간선 = 거리 = 비용 : 선
    유니온 파인드
*/

// [진입, 진출]

function solution(n, costs) {
  let answer = 0;
  costs.sort((a, b) => {
    return a[2] - b[2];
  });
  const table = Array(n)
    .fill(0)
    .map((element, index) => index); // [0, 1, 2, 3]

  while (!isOne(table)) {
    const current = costs.shift(); // 0
    const one = current[0];
    const other = current[1];
    const cost = current[2];

    if (table[other] !== table[one]) {
      table = changeTableNumber(table, one, other);
      answer += cost;
    }
  }
  return answer;
}

function changeTableNumber(table, one, other) {
  let otherTable = table[other];
  let otherOne = otherTable[one];
}

function isOne(table) {
  for (let i = 0; i < table.length; i++) {
    if (table[i - 1] !== table[i]) {
      return false;
    }
  }
  return true;
}

solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]);

//지연
function solution(routes) {
  let numOfInstall = 0; // 설치한 카메라 개수

  routes.sort((a, b) => {
    return a[1] - b[1]; // 진출지점 기준 오름차순
  });

  let camera = -30001; // 카메라 설치 예정 위치(초기화)

  for (let i = 0; i < routes.length; i++) {
    if (camera < routes[i][0]) {
      // 카메라가 차량의 진입로보다 뒤에 있으면
      numOfInstall++; // 카메라 한대 설치할건데
      camera = routes[i][1]; // 그 카메라는 진출로에다가 설치
    }
  }

  return numOfInstall;
}

/*
function solution(n, costs) {
  let answer = 0,
    island = [],
    bridge = [],
    total = 0;
  costs.sort((a, b) => a[2] - b[2]); // 비용이 낮은 거 순으로 정렬
  island[costs[0][0]] = true; // cost에 제일 앞에 있는 섬 방문 처리
  island[costs[0][1]] = true; //
  bridge[0] = true; // 건설된 다리 하나 지어졋다고 친다.  다리 번호 == costs 번호
  answer += costs[0][2]; // 지어진 비용 추가
  total += 1; // 지어진 다리 개수 증가

  while (total < n - 1) {
    // 지어진 다리 개수가 섬개수 -1개 일때, 즉 다리를 다 지었을 때 종료
    for (let i = 1; i < costs.length; i++) {
      let [start, end, cost] = costs[i]; // 각 코스트별 디스트럭쳐링
      if (
        !bridge[i] &&
        ((island[start] && !island[end]) || (island[end] && !island[start])) //둘 중 하나만 방문 한 경우
      ) {
        // 그 다리를 사용한다.
        island[start] = true;
        island[end] = true;
        bridge[i] = true;
        answer += cost;
        total++;
        break;
      }
    }
  }

  return answer;
}
*/

// 1. 비용이 낮은 거 순으로 정렬한다.
// 2. 제일 비용이 낮은 다리는 무조거 쓸 테니까  비용이 낮은 다리를 일단 하나 건설 한다.
// 3. 다리별 방문  처리를 해 준다.
// 4. while 문을 돌린다. 지을 수 있는 다리의 조건은 그 다리를 지은적 없고 두 섬중에 하나는 연결되어 있는 것
// 5. 다리를 하나 지으면 for 문을 break 한다.
// 6. 그러면 다시 while 문에 의해서 for 문이 돌아간다. 필요한 다리 개수가 다 차면 while 문이 종료된다.
