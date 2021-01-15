/*
    begin에서 갈 수 있는 모든 경우의 수 
    hit -> hit, dot, dog, lot, log, cog -> 알파벳 2개가 다르면? 탐색불가 -> 알파벳 1개가 다르면? visit ->  반복 -> 타겟을 만났을 때 level return
    싹다호출 후 안되는 것 잘라
    캐싱해야댐(최악일 때 begin이랑 한글자 다른게 50개 있을 수 잇음 )
*/

function isValid(a, b) {
  let cnt = 0;

  // 두 str을 한 글자씩 비교했을 때 같은 글자가 있으면 cnt++
  for (let i = 0; i < a.length; i++) {
    // should upgrade
    if (a[i] !== b[i]) {
      cnt++;
    }
  }

  // cnt === 1이라면 딱 한글자가 같은 경우임
  if (cnt === 1) return true;
  return false;
}

function solution(begin, target, words) {
  let answer = 0;
  // memoization
  let visited = Array.from({ length: words.length }, () => false);

  function dfs(idx, n) {
    let min = 51; // ????
    visited[idx] = true; // 방문처리
    if (words[idx] === target) return n;

    for (let j = 0; j < words.length; j++) {
      if (isValid(words[idx], words[j]) && !visited[j]) {
        let depth = dfs(j, n + 1);
        console.log("depth in dfs :", depth);
        if (min > depth) min = depth;
      }
    }

    console.log(min);
    return min;
  }

  for (let i = 0; i < words.length; i++) {
    if (isValid(begin, words[i])) {
      let depth = dfs(i, 1);
      console.log(depth);
      if (answer > depth) answer = depth;
    }
  }

  if (answer === 51) return 0;
  return answer;
}

const f = solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);

/*
                                lot
    hit -> hot -> dot -> dog -> log -> cog
        (0, 1)  (1, 2)  (2,3)  (3, 4) (4, 5)

    visited = [true, true, true, true]

    dog에서 lot으로 가는길에는 한글자 바뀌는게 없음 => 바로 log으로 간다

            hit
           /
         hot(0, 1) - visited
         /          \
        dot(1, 2)  lot(3, 2)
       /  \
     dog  lot
     /  \
   log  cog
*/

/*
function isValid(strA, strB) {
  let cnt = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) cnt++;
  }
  if (cnt === 1) return true;
  return false;
}

function solution(begin, target, words) {
  let answer = 51;
  let visited = Array.from({ length: words.length }, () => false);

  function dfs(idx, n) {
    0, 1;
    console.log(words[idx], n);
    visited[idx] = true;
    if (words[idx] === target) {
      return n;
    }
    let min = 51;
    for (let i = 0; i < words.length; i++) {
      if (isValid(words[idx], words[i]) && !visited[i]) {
        // w, word가 한 글자만 다르다면
        let v = dfs(i, n + 1);
        if (min > v) {
          min = v;
        }
      }
    }
    return min;
  }

  for (let i = 0; i < words.length; i++) {
    if (isValid(begin, words[i])) {
      // w, word가 한 글자만 다르다면
      let v = dfs(i, 1);
      if (answer > v) answer = v;
    }
  }
  if (answer === 51) answer = 0;
  console.log(answer);

  return answer;
}
*/
