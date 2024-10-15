const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

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

const divideLand = (land, height) => {
  let visited = Array.from({ length: land.length }, () =>
    Array(land.length).fill(0)
  );
  let areaNumber = 0;
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land.length; j++) {
      if (!visited[i][j]) {
        visited[i][j] = ++areaNumber;
        let queue = new Queue();
        queue.enqueue([i, j]);
        while (queue.getLength()) {
          const [x, y] = queue.dequeue();

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (
              nx >= 0 &&
              nx < land.length &&
              ny >= 0 &&
              ny < land.length &&
              !visited[nx][ny]
            ) {
              if (height >= Math.abs(land[x][y] - land[nx][ny])) {
                visited[nx][ny] = areaNumber;
                queue.enqueue([nx, ny]);
              }
            }
          }
        }
      }
    }
  }
  return [visited, areaNumber];
};

const connectAreas = (land, dividedLand) => {
  let visited = Array.from({ length: land.length }, () =>
    Array(land.length).fill(false)
  );
  let connections = [];

  let queue = new Queue();
  queue.enqueue([0, 0]);
  visited[0][0] = true;

  while (queue.getLength()) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 2; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < land.length && ny < land.length) {
        if (dividedLand[x][y] != dividedLand[nx][ny]) {
          const diff = Math.abs(land[nx][ny] - land[x][y]);
          connections.push([dividedLand[x][y], dividedLand[nx][ny], diff]);
          connections.push([dividedLand[nx][ny], dividedLand[x][y], diff]);
        }
        if (!visited[nx][ny]) {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
  return connections;
};

function solution(land, height) {
  let answer = 0;

  const [dividedLand, areasCnt] = divideLand(land, height);
  const connections = connectAreas(land, dividedLand);
  const uf = new UnionFind(areasCnt + 1);

  connections.sort((a, b) => a[2] - b[2]);
    
  let cnt = 0;
  for (let i = 0; i < connections.length; i++) {
    const [from, to, cost] = connections[i];

    if (!uf.connected(from, to)) {
      answer += cost;
      uf.union(from, to);
      cnt++;
    }

    if (cnt === areasCnt - 1) break;
  }
  return answer;
}