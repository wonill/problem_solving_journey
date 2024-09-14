const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let t = Number(input[0]);
let answer = [];

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

const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

const bfs = (l, start, target) => {
  let [x, y] = start;
  let [targetX, targetY] = target;

  let visited = Array.from({ length: l }, () => Array(l).fill(0));
  visited[x][y] = 1;
  let queue = new Queue();
  queue.enqueue(start);

  while (queue.getLength()) {
    let [curX, curY] = queue.dequeue();
    if (curX === targetX && curY === targetY) return visited[curX][curY] - 1;

    for (let i = 0; i < 8; i++) {
      let [nx, ny] = [curX + dx[i], curY + dy[i]];
      if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
      if (!visited[nx][ny]) {
        visited[nx][ny] = visited[curX][curY] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < t; i++) {
  let l = Number(input[i * 3 + 1]);
  let start = input[i * 3 + 2].split(" ").map(Number);
  let target = input[i * 3 + 3].split(" ").map(Number);

  answer.push(bfs(l, start, target));
}

console.log(answer.join("\n"));
