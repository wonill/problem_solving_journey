function solution(n) {
    let answer = 0;
    let isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= n / i; i++){
        let count = 0;
        for(let j = 2; j <= i; j++){
            if (i % j === 0) count++;
        }
        if (count === 1) for (let j = i+i; j <= n; j+=i) isPrime[j] = false;
    }
    for (prime of isPrime) if (prime) answer++;
    return answer;
}