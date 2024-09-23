class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    
    dequeue() {
        if (this.tailIndex > this.headIndex) {
            const item = this.items[this.headIndex];
            delete this.items[this.headIndex];
            this.headIndex++;
            return item;
        }
    }
    
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const position = {
    'S': [],
    'L': [],
    'E': [],
}

const createMap = (maps) => {
    return Array.from({ length: maps.length }, (_, i) => {
        return maps[i].split('');
    });
}

const findPositions = (maps) => {
    position.S = [];
    position.L = [];
    position.E = [];
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'O' || maps[i][j] === 'X') continue;
            position[maps[i][j]] = [i, j];
        }
    }
}

function solution(maps) {
    findPositions(maps);
    
    const bfs = (start, end) => {
        let visited = createMap(maps);
        let queue = new Queue();
        
        queue.enqueue([...start, 0]);
        visited[start[0]][start[1]] = 'X'; // Start position visited
        while (queue.getLength()) {
            const [x, y, distance] = queue.dequeue();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length || visited[nx][ny] === 'X') continue;
                if (end[0] === nx && end[1] === ny) return distance + 1;
                queue.enqueue([nx, ny, distance + 1]);
                visited[nx][ny] = 'X';
            }
        }
        return -1;
    }
    
    const startToLever = bfs(position.S, position.L);
    const leverToExit = bfs(position.L, position.E);
    
    if (startToLever === -1 || leverToExit === -1) return -1;
    
    return startToLever + leverToExit;
}
