function solution(n) {
    var answer = [n];
    while (n != 1) answer.push(n % 2 === 0 ? n/=2 : n = n * 3 + 1);
    return answer;
}