const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
let parent;
let input = [];
let result = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    [n, m] = input[0].split(' ').map(Number);
    parent = Array.from({ length: n + 1 }, (_, i) => i);

    for (let i = 1; i <= m; i++) {
        const [op, a, b] = input[i].split(' ').map(Number);
        if (op === 0) {
            union(a, b);
        } else {
            result.push(isConnected(a, b) ? "YES" : "NO");
        }
    }

    console.log(result.join('\n'));
    process.exit(0);
});

const find = (x) => {
    if (x === parent[x]) return x;
    return parent[x] = find(parent[x]);
};

const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a !== b) parent[b] = a;
};

const isConnected = (a, b) => {
    return find(a) === find(b);
};