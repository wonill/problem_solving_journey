function solution(n) {
    var answer = 0;
    for (let num = 4; num <= n; num++){
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                answer++;
                break;
            } 
        }
    }
    return answer;
}