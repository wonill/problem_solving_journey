function solution(num_list) {
    return Number(num_list.reduce((a, b) => a + (b % 2 === 1 ? b : ''), '')) +
        Number(num_list.reduce((a, b) => a + (b % 2 === 0 ? b : ''), ''));
}