/*
    2016년
    url: https://programmers.co.kr/learn/courses/30/lessons/12901
*/

function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`'${a}, ${b}, 2016'`);
  let targetDay = date.getDay();

  const answer = days.map(day =>
    targetDay === days.indexOf(day) ? day : null
  );

  return answer[targetDay];
}
