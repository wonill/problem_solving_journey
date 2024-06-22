function solution(numbers) {
    answer = numbers.map(v => v.toString()).sort((a, b) => (b+a) - (a+b)).join('');
    return answer[0] === '0' ? '0' : answer;
}