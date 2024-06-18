function solution(arr, divisor) {
    let answer = [];
    for (a of arr) if (a % divisor === 0) answer.push(a);
    if (answer.length === 0) return [-1];
    return answer.sort((a, b) => a - b);
}