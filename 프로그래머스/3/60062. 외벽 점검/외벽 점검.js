function solution(n, weak, dist) {
    const len = weak.length;
    weak = weak.concat(weak.map(v => v + n));
    
    const permutations = getPermutations(dist);
    
    for (let i = 1; i <= dist.length; i++) {
        for (let start = 0; start < len; start++) {
            for (let perm of permutations) {
                let count = 0;
                let position = start;
                
                for (let j = 0; j < i; j++) {
                    const end = weak[position] + perm[j];
                    while (position < start + len && weak[position] <= end) {
                        position++;
                        count++;
                    }
                    if (count === len) return i;
                }
            }
        }
    }
    
    return -1;
}

function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    return arr.flatMap((v, i) => 
        getPermutations(arr.slice(0, i).concat(arr.slice(i + 1)))
            .map(p => [v].concat(p))
    );
}