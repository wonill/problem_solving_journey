function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    let k = Math.min(denom, numer);
    for (let i = 2; i <= k; i++){
        while (denom % i === 0 && numer % i === 0){
            denom /= i;
            numer /= i;
        }
    }
    return [numer, denom];
}