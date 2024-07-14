function solution(n) {
    let answer = 0;
    let cur = 1;
    while (cur * ++answer <= n) cur *= answer;
    return answer - 1;
}