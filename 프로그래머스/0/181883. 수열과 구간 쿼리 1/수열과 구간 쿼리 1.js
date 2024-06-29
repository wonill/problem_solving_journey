function solution(arr, queries) {
    return arr.map((v, i) =>{
       for (let query of queries) if (i >= query[0] && i <= query[1]) v++;
       return v;
    });
}