function solution(cipher, code) {
    return [...cipher].filter((_, i) => i % code === code - 1).join('');
}