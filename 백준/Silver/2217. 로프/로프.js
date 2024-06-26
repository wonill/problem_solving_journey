const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
input.shift();
const ropes = input.map(i => Number(i));

function solution(N, ropes){
    const sortRopes = ropes.sort((a, b) => a - b);
    const arr = [];
    
    for (let i = 0; i < N; i+= 1){
        arr.push(sortRopes[i] * (N - i));
    }
    console.log(Math.max(...arr));
}

solution(N, ropes);