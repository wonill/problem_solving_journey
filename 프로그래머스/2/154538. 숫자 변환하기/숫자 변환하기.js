class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(item) {
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
    
    getLength() {
        return this.rear - this.front;
    }
}

const calculate = (cur, n, num) => {
    switch (num) {
        case 0: return cur - n;
        case 1: if (cur % 2 === 0) return cur / 2;
        case 2: if (cur % 3 === 0) return cur / 3;   
    }
    return 0;
}

function solution(x, y, n) {
    let queue = new Queue();
    queue.enqueue([y, 0])
    let visited = {};
    visited[y] = 1;
    while (queue.getLength()) {
        const [cur, cnt] = queue.dequeue();
        if (cur === x) return cnt;
        for (let i = 0; i < 3; i++) {
            const next = calculate(cur, n, i)
            if (next >= x && !visited[next]) {
                visited[next] = 1;
                queue.enqueue([next, cnt + 1]);
            }
        }
    }
    return -1;
}
