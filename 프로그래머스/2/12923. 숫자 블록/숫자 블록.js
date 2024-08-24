function solution(begin, end) {
    var answer = [];
    let isFound;
    let max_divisor;
    if (begin === 1) {
        answer.push(0);
        begin++;
    }
    for (begin; begin <= end; begin++){
        isFound = false;
        max_divisor = 1;
        for (let i = 2; i <= begin / i; i++){
            if (begin % i === 0){
                max_divisor = i;
                if (begin / i <= 10000000){
                    answer.push(begin / i);
                    isFound = true;
                    break;   
                }
            }
            
        }
        if (!isFound) answer.push(max_divisor);
    }
    return answer;
}
// 자기 자신이 아닌 약수 중에 가장 큰 수