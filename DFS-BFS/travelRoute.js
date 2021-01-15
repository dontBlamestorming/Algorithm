/*
 여행경로
 백준(BOJ)
 url : https://programmers.co.kr/learn/courses/30/lessons/43164
*/

function solution(tickets) {
  let answer = ["ICN"];
  let visited = Array.from({ length: tickets.length }, () => false);
  const routes = tickets.sort((a, b) => {
    // 같은 경로가 있는 경우 알파벳 순으로 빠른 것을 먼저 방문
    if (b[1] > a[1]) {
      return -1;
    }
  });
  console.log(routes);

  function dfs(departure, n) {
    //종료조건
    if (n === routes.length) {
      return;
    }

    for (let i = 0; i < routes.length; i++) {
      if (routes[i][0] === departure && !visited[i]) {
        answer.push(routes[i][1]);
        departure = routes[i][1];
        visited[i] = true;
      } else {
        // 다음 경로가 없는 경우
        // console.log(i);
        // true로 된 경우는 false로 돌려서 다시 탐색할 수 있또록
      }
    }

    dfs(departure, n + 1);
  }

  dfs("ICN", 0);

  console.log(answer);
  return answer;
}

// solution([
//   ["ICN", "JFK"],
//   ["HND", "IAD"],
//   ["JFK", "HND"],
// ]);

// 다음 경로가 없는 경우
solution([
  ["ICN", "A"],
  ["ICN", "B"],
  ["B", "ICN"],
]);

// 중복된 경로가 있는 경우
solution([
  ["ICN", "A"],
  ["ICN", "A"],
  ["A", "ICN"],
]);

// solution([
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ]);

// dfs
// icn에서 출발
// function solution(tickets) {
//   let answer = [];
//   let visited = Array.from({ length: tickets.length }, () => false);
//   const routes = tickets.sort((a, b) => {
//     if (b[1] > a[1]) {
//       return -1;
//     }
//   });

//   function dfs(departure, depth) {
//     if (answer.length === routes.length + 1) {
//       return;
//     } //종료조건(임시)

//     for (let i = 0; i < routes.length; i++) {
//       if (routes[i][0] === departure && !visited[i]) {
//         answer.push(departure); // ICN, ATL, ICN, SFO, ATL,
//         departure = routes[i][1]; // ATL, ICN, SFO, ATL, SFO,
//         visited[i] = true; // [t, t, t, t,   ]
//       }
//     }

//     dfs(departure, depth + 1);

//     return;
//   }

//   dfs("ICN", 0, routes);

//   console.log(answer);
//   return answer;
// }

// // solution([
// //   ["ICN", "JFK"], // [0][0] 출발, [0][1] 도착
// //   ["HND", "IAD"],
// //   ["JFK", "HND"],
// // ]);
// //  icn -> jfk -> hnd -> iad
// solution([
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ]);
/*
 icn -> atl -> icn -> sfo -> atl -> sfo
  
    [
        [ 'ICN', 'ATL' ],
        [ 'SFO', 'ATL' ],
        [ 'ATL', 'ICN' ],
        [ 'ICN', 'SFO' ],
        [ 'ATL', 'SFO' ]
    ]
*/
