function solution(board){
    let answer = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === 1) {
                const a = i > 0 && j > 0 ? board[i - 1][j - 1] : 0;
                const b = i > 0 ? board[i - 1][j] : 0;
                const c = j > 0 ? board[i][j - 1] : 0;
                board[i][j] = Math.min(a + 1, b + 1, c + 1);   
            }
        }
    }

    return board.reduce((a, c) => Math.max(a, Math.max(...c)), 0) ** 2;
}