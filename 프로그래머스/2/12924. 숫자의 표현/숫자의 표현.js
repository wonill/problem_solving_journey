function solution(n) {
    let answer = 0;
    for (let i = 1; i*(i+1)/2<=n; i++){
        if (i % 2 === 1 && n % i === 0) answer++;
        if (i % 2 === 0 && n % i === i / 2) answer++;
    }
    
    
    return answer;
}