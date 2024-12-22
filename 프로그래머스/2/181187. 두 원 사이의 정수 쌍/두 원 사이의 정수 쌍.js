function solution(r1, r2) {
    var answer = 0
    for (let i = 1; i <= r2; i++) {
        const maxHeight = Math.sqrt(r2 ** 2 - i ** 2);
        const minHeight = i <= r1 ? Math.sqrt(r1 ** 2 - i ** 2) : 0;
        answer += Math.floor(maxHeight) - Math.ceil(minHeight) + 1;
    }
    return answer * 4;
}