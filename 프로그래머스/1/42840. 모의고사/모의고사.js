const patterns = {
    1 : [1, 2, 3, 4, 5],
    2 : [2, 1, 2, 3, 2, 4, 2, 5],
    3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
}

function solution(answers) {
    let scoreBoard = Array(3).fill(0);
    answers.forEach((answer, idx) => {
        for (let i in patterns){
            if(patterns[i][idx % patterns[i].length] === answer) scoreBoard[i - 1]++;
        }
    });
    const max = Math.max(...scoreBoard);
    return [1, 2, 3].filter(v => scoreBoard[v - 1] === max);
}