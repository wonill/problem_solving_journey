function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let a = 0;
    let b = 0;
    // console.log(A, B)
    while (b < B.length){
        if (A[a] < B[b]){
            // console.log(A[a], B[b])
            answer++;
            a++;
            b++;
        } else {
            while (B[b] && A[a] >= B[b]){
                b++;
            }
        }
    }
    return answer;
}

// 1 3 5 7
// 2 2 6 8