/*
    베스트 앨범
    url: https://programmers.co.kr/learn/courses/30/lessons/42579
*/

function solution(genres, plays) {
  var answer = [];
  let table = {};

  // set genre
  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i];
    table[genre] = [];
  }

  // set values
  for (let i = 0; i < genres.length; i++) {
    let uniqueNumber = plays.indexOf(plays[i]);
    let playsNumber = plays[i];
    let genre = genres[i];

    table[genre].push({ id: uniqueNumber, plays: playsNumber });
    table[genre].sort((a, b) => {
      return b.plays - a.plays;
    });
  }

  // 장르별 플레이횟수 합산 후 배열화
  let genreArr = [];
  for (let key in table) {
    let genreSum = 0;

    for (let i = 0; i < table[key].length; i++) {
      genreSum = genreSum + table[key][i].plays;
    }

    genreArr.push({ genre: key, playSum: genreSum });
  }

  genreArr.sort((a, b) => {
    return b.playSum - a.playSum;
  });

  // 답 리턴
  for (let i = 0; i < genreArr.length; i++) {
    table[genreArr[i].genre].slice(0, 2).forEach((value) => {
      answer.push(value.id);
    });
  }

  return answer;
}

/**
 function solution(genres, plays) {
    var answer = [];
    let table = {};
    let number = [];
    let aGenreSum = 0;
    let bGenreSum = 0;
    
    // set genre
    for(let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        table[genre] = [];
    }
    
    // set values
    for(let i = 0; i < genres.length; i++) {
        let uniqueNumber = plays.indexOf(plays[i]);
        let playsNumber = plays[i];
        let genre = genres[i];
        table[genre].push({[uniqueNumber] : playsNumber});
        
        for (let key in table) { // pop이나 classic말고 다른 장르가 들어오면?
            console.log(table);
            if(key === genre) {
                 aGenreSum = aGenreSum + playsNumber;
                break;
            } else {
                bGenreSum = bGenreSum + playsNumber;
                console.log('false');
                break;
            }
        }        
    }    
    return answer;
}
 */
