function solution(k, tangerine) {
    var answer = 0;
    let num_of_tangerine = [];
    tangerine.sort((a, b) => a - b);
    let count = 0;
    let now;
    for (let i = 0; i < tangerine.length; i++){
        if (i === 0) now = tangerine[i];
        if (tangerine[i] != now){
            num_of_tangerine.push([now, count]);
            now = tangerine[i];
            count = 0;
        }
        count++;
    }
    num_of_tangerine.push([now, count]);
    num_of_tangerine.sort((a, b)=>b[1] - a[1]);
    let sum = 0;
    count = 1;
    for (let i = 0; i < num_of_tangerine.length; i++){
        if (sum + num_of_tangerine[i][1] >= k) return count;
        sum += num_of_tangerine[i][1];
        count++;
    }
    return answer;
}