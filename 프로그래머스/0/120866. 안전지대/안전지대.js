function solution(board) {
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board.length; j++){
            if (board[i][j] === 1){
                for (let k = -1; k <= 1; k++){
                    for (let l = -1; l <= 1; l++){
                        if (i + k >= 0 && i + k < board.length &&
                           j + l >= 0 && j + l < board.length && board[i + k][j + l] != 1) board[i + k][j + l] = -1;
                    }
                }
            }
        }
    }
    return board.flat().filter(v => v === 0).length;
}