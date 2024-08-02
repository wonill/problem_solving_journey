function solution(a, b) {
    const max = Math.min(a, b);
    for (let i = 2; i <= max; i++){
        while (a % i === 0 && b % i === 0){
            a /= i;
            b /= i;
        }
    }
    while (b % 2 === 0 || b % 5 === 0){
        if (b % 2 === 0) b /= 2;
        if (b % 5 === 0) b /= 5;
    }
    return b === 1 ? 1: 2;
}