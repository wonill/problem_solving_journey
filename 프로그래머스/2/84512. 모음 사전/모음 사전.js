const wordMap = {
  '0' : '',
  '1' : 'A',
  '2' : 'E',
  '3' : 'I',
  '4' : 'O',
  '5' : 'U'
}

function solution(word) {
    let words = new Set();
    for (let i = 0; i < 6; i++){
      for (let j = 0; j < 6; j++){
        for (let k = 0; k < 6; k++){
          for (let l = 0; l < 6; l++){
            for (let m = 0; m < 6; m++){
            words.add(wordMap[i] + wordMap[j] + 
                    wordMap[k] + wordMap[l] + wordMap[m]);
            }
          }
        }
      }
    }
    let dictionary = [...words].sort();
    return dictionary.indexOf(word);
}