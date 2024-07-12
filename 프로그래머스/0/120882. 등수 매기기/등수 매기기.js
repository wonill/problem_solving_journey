function solution(score) {
    return score.map(a => {
       return score.filter(b => (b[0] + b[1]) / 2 > (a[0] + a[1]) / 2).length + 1; 
    });
}
