function solution(number, k) {
    let answer = [];
    for (let i = 0; i < number.length; i++){
        while (k > 0 && answer.length && answer[answer.length - 1] < number[i]){
            answer.pop();
            k--;
        }
        answer.push(number[i]);
    }
    while (k-- > 0) answer.pop();
    return answer.join('');
}