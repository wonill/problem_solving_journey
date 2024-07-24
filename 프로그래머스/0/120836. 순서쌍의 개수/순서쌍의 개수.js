function solution(n) {
    let cnt = 0;
    for (let i = 1; i <= n /i; i++){
        if (n % i === 0) cnt+=2;
    }
    return parseInt(Math.sqrt(n)) ** 2 === n ? cnt - 1 : cnt;
}