function solution(n, left, right) {
    return Array.from({length : right - left + 1}, (_, i) => Math.max(Math.floor((i+left)/n), (i+left)%n)+1);
}