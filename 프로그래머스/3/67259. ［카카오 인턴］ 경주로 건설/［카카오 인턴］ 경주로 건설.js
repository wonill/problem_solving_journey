function solution(board) {
    const heap = new MinHeap();
    const n = board.length;
    const costs = board.map(row => row.map(v => v === 1 ? [0, 0] : [Infinity, Infinity]));
    const dx = [1, 0, 0, -1];
    const dy = [0, 1, -1, 0];
    
    // queue value => x, y, cost 총합, 이전 방향(0: row, 1: col);
    heap.push({ x: 0, y: 0, cost: 0, prevDir: 0 });
    heap.push({ x: 0, y: 0, cost: 0, prevDir: 1 });
    
    while (!heap.isEmpty()) {
        const { x: x, y: y, cost: cost, prevDir: dir } = heap.pop();
        if (costs[x][y][dir] < cost) continue;
        costs[x][y][dir] = cost;
        
        if (x === n - 1 && y === n - 1) continue;
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            const nDir = Math.abs(dx[i]) === 1 ? 1 : 0;
            const nCost = nDir === dir ? cost + 100 : cost + 600;
            if (nx > -1 && ny > -1 && nx < n && ny < n && costs[nx][ny][nDir] >= nCost) {
                heap.push({x: nx, y: ny, cost: nCost, prevDir: nDir});
            }
        }
    }
    
    return Math.min(...costs[n - 1][n - 1]);
}

class MinHeap {
    constructor() {
        this.heap = [null];
    }
    
    push(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while (parentIndex !== 0 && this.heap[currentIndex].cost < this.heap[parentIndex].cost) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    
    pop() {
        if (this.isEmpty()) return;
        if (this.heap.length === 2) return this.heap.pop();
        
        const val = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        while (
            this.heap[leftIndex] && this.heap[currentIndex].cost > this.heap[leftIndex].cost ||
            this.heap[rightIndex] && this.heap[currentIndex].cost > this.heap[rightIndex].cost 
        ) {
            if (this.heap[leftIndex] === undefined) {
                this._swap(rightIndex, currentIndex);
            } else if (this.heap[rightIndex] === undefined) {
                this._swap(leftIndex, currentIndex);
            } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }
            
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        
        return val;
    }
    
    isEmpty() {
        return this.heap.length === 1;
    }
    
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}