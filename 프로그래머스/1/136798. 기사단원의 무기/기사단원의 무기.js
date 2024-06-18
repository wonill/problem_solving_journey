function solution(number, limit, power) {
    let result = 0;
    for (let i = 1; i <= number; i++){
        let count = 0;
        for (let j = 1; j <= parseInt(Math.sqrt(i)); j++){
            if (i % j === 0) count++;
            if (i % j === 0 && j**2 != i) count++;
        }
        result += count > limit ? power : count;
    }
    return result;
}