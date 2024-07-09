function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for (s; s <= e; s++) if (s % k === 0) arr[s]++;
    });
    return arr;
}