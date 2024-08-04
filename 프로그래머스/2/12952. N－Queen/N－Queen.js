let answer = 0;

function isValid(visited, row, i){
    for (let a = 0; a < row; a++){
        const b = visited[a].indexOf(true);
        if (b === i || Math.abs(b - i) === Math.abs(row - a)) return false;
    }
    return true;
}

function recursion(visited, row, index){
    if (row === visited.length - 1) answer++;
    visited[row][index] = true;
    for (let i = 0; i < visited.length; i++){
        if(isValid(visited, row + 1, i)){
            recursion(JSON.parse(JSON.stringify(visited)), row + 1, i);
        }
    }
}

function solution(n) {
    let visited = Array.from({length:n}, () => Array(n).fill(false));
    let row = 0;
    for (let i = 0; i < visited.length; i++){
        if(isValid(visited, row, i)){
            recursion(JSON.parse(JSON.stringify(visited)), row, i);
        }
    }
    return answer;
}