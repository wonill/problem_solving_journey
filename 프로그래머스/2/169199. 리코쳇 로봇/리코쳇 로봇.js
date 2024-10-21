class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item){
        this.items[this.rear] = item;
        this.rear++;
    }

    dequeue(){
        if (this.rear > this.front) {
            const item = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            return item;
        }
    }

    getLength(){
        return this.rear - this.front;
    }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const findStartPosition = (board) => {
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === 'R') return [i, j];
        }
    }
}

function solution(board) {
    let queue = new Queue();
    let visited = Array.from({length: board.length}, () => new Array(board[0].length).fill(false));
    const [x, y] = findStartPosition(board);
    visited[x][y] = true;
    queue.enqueue([x, y, 0]);
    while (queue.getLength() > 0){
        const [x, y, cnt] = queue.dequeue();
        if (board[x][y] === 'G') return cnt;
        for (let i = 0; i < 4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            while (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length && board[nx][ny] != 'D'){
                nx += dx[i];
                ny += dy[i];
            }
            nx -= dx[i];
            ny -= dy[i];
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.enqueue([nx, ny, cnt + 1]);
            }
        }
    }
    return -1;
}