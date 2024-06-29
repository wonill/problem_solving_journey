function solution(s) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return Array(52).fill(0).map((_, i) => s.split('').filter(v => v == alphabet[i]).length);
}