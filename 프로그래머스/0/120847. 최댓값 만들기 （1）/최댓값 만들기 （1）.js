function solution(numbers) {
    return numbers.sort((a, b) => b - a).reduce((a, c, i) => i <= 1 ? a * c : a);
}