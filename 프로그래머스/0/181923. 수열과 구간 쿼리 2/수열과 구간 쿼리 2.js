function solution(arr, queries) {
    return queries.map(v => {
        let partition = arr.slice(v[0], v[1] + 1).filter(val => val > v[2]);
        if (partition.length) return Math.min(...partition);
        return -1;
    });
}