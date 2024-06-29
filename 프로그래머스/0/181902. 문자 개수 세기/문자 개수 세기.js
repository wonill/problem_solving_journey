function solution(my_string) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return Array(52).fill(0).map((_, i) => my_string.split('').filter(v => v == alphabet[i]).length);
}