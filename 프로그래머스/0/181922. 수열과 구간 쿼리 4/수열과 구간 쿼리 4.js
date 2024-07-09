function solution(arr, queries) {
    return queries.reduce((r, [s, e, k]) => {
        for (s; s <= e; s++) if (s % k === 0) arr[s]++
        return arr;
    }, arr);
}