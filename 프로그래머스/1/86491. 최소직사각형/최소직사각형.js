function solution(sizes) {
    sizes.forEach(v => {
        if (v[0] < v[1]){
            let tmp = v[0];
            v[0] = v[1];
            v[1] = tmp;
        }
    });
    return sizes.reduce((a, b) => Math.max(a, b[0]), 0) * sizes.reduce((a, b) => Math.max(a, b[1]), 0);
}