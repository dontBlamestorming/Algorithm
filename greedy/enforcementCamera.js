/*
    단속카메라
    url: https://programmers.co.kr/learn/courses/30/lessons/42884
*/

function solution(routes) {
  let numOfInstallCam = 0; // 설치한 카메라 개수

  routes.sort((a, b) => {
    return a[1] - b[1]; // 진출지점 기준 오름차순
  });

  let camera = -30001; // 카메라 설치 '예정' 위치

  for (let i = 0; i < routes.length; i++) {
    if (camera < routes[i][0]) {
      // 새로 설치할 카메라의 예정위치가 순서대로 검사할 차량의 고속도로 진입경로보다 뒤에 있으면
      numOfInstallCam++; // 카메라 한대 설치할건데
      camera = routes[i][1]; // 그 카메라는 진출로에다가 설치
    }
  }

  return numOfInstallCam;
}

solution([
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);

/*
  어쨋든 모든 차는 감시카메라를 지나쳐야하니까 모든 차가 고속도로에서 진출하는 지점을 기준으로 오름차순 정렬한다.
  routes[i][0] - 진입 지점 / routes[0][i] - 진출지점
  for문 내에서의 camera는 가장 최근에 설치된 카메라의 위치가 기준이 된다.
  일직선 상에서 생각해보면 i번째 검사할 차량의 진입로가 가장 최근에 설치된 카메라의 오른쪽에 위치하게되면 
  무조건 카메라를 1개 더 설치해야 한다.
*/
