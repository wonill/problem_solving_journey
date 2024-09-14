const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);

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

let visited = [];

input.slice(1).forEach((line) => {
  visited.push(line.split(" ").map(Number));
});

let start;
visited.forEach((row, i) => {
  row.forEach((v, j) => {
    if (v === 2) start = [i, j];
  });
});

const bfs = () => {
  let [x, y] = start;
  let queue = new Queue();
  queue.enqueue(start);
  visited[x][y] = 1;
  while (queue.getLength()) {
    let [curX, curY] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [curX + dx[i], curY + dy[i]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m || !visited[nx][ny]) continue;
      if (visited[nx][ny] === 1) {
        visited[nx][ny] = visited[curX][curY] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
};

bfs();
let [x, y] = start;
visited[x][y] = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] != 0)
      visited[i][j] = visited[i][j] === 1 ? -1 : visited[i][j] - 1;
  }
}
console.log(visited.map((v) => v.join(" ")).join("\n"));
