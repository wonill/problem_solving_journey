function solution(array) {
    let max = 0;
    let max_idx;
    for (let i = 0; i < array.length; i++) if (array[i] > max) {
        max = array[i];
        max_idx = i;
    }
    return [max, max_idx];
}