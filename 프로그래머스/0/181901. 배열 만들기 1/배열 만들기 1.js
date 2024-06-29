function solution(n, k) {
    return Array.from({length : parseInt(n / k)}, (_, i) => k * (i + 1));
}