const direction = {
    left : [-1, 0],
    right : [1, 0],
    up : [0, 1],
    down : [0, -1]
}
function solution(keyinput, board) {
    return keyinput.reduce((a, c) =>{ 
        let nextX = a[0] + direction[c][0];
        let nextY = a[1] + direction[c][1];
        return Math.abs(nextX) < (board[0] / 2) && Math.abs(nextY) < (board[1] / 2)
        ? [nextX, nextY]
        : [a[0], a[1]];
    }, [0, 0]);
}