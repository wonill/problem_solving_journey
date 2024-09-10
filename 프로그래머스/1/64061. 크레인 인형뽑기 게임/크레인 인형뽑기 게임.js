function solution(board, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach(move => {
        let pick;
        board.some(row => {
            if (row[move - 1]) {
                pick = row[move - 1];
                row[move - 1] = 0;
                return true;
            } 
        })
        if (!pick) return;
        if (stack[stack.length - 1] === pick) {
            stack.pop();
            answer += 2;
        } else stack.push(pick);
    })
    return answer;
}