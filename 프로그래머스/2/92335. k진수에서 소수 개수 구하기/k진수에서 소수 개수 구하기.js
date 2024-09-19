const isPrime = (num) => {
    if (isNaN(num) || num < 2) return false;
    for (let k = 2; k <= num / k; k++){
        if (num % k === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    nums = n.toString(k).split('0');
    return nums.filter(num => isPrime(num)).length;
}