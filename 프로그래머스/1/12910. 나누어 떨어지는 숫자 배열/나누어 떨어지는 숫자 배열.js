function solution(arr, divisor) {
    //for (a of arr) if (a % divisor === 0) answer.push(a);
    let answer = arr.filter(value => value % divisor === 0)
    // if (answer.length === 0) return [-1];
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}