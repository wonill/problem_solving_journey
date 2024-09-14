const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

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

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [n, k] = input.split(" ").map(Number);

const MAX = 100001;
let visited = new Array(MAX).fill(0);

const bfs = () => {
  let queue = new Queue();
  queue.enqueue(n);

  while (queue.getLength() > 0) {
    let cur = queue.dequeue();
    if (cur === k) {
      return visited[cur];
    }
    for (let nxt of [cur - 1, cur + 1, 2 * cur]) {
      if (nxt < 0 || nxt >= MAX) continue;
      if (!visited[nxt]) {
        queue.enqueue(nxt);
        visited[nxt] = visited[cur] + 1;
      }
    }
  }
};

console.log(bfs());
