function solution(numbers) {
    let answer = numbers.sort((a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))).join('');
    return Number(answer) === 0 ? '0' : answer;
}