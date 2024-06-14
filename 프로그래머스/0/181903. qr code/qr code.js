function solution(q, r, code) {
    var answer = '';
    for (let i = 0; i < code.length; i++){
        answer += i % q == r ? code[i] : '';
    }
    return answer;
}