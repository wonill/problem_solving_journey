function solution(n, words) {
    let wordsSet = new Set();
    wordsSet.add(words[0]);
    for (let i = 1; i < words.length; i++){
        if(words[i - 1][words[i - 1].length - 1] != words[i][0] || wordsSet.has(words[i]))
            return [i % n + 1, parseInt(i / n) + 1];
        wordsSet.add(words[i]);
    }
    return [0,0];
}
