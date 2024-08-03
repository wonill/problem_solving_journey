function factorial(n){
    let res = BigInt(1);
    while (n > 0) res *= BigInt(n--);
    return res;
}

function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}
    
 