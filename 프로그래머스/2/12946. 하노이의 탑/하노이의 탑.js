function solution(n) {
    var answer = [];
    const recursive = (n, src, inter, target) => {
        
        if (n === 1){
            answer.push([src, target])
            return;
        }
        
        recursive(n - 1, src, target, inter)
        answer.push([src, target]);
        recursive(n - 1, inter, src, target);
    }
    recursive(n, 1, 2, 3);
    
    return answer;
}

// 3(target = 3)
//               [1, 2] [1, 3]               [2, 3]
// [1, 3]    [1, 2] [3, 2]    [1, 3] [2, 1] [2, 3] [1, 3]

// 4(target = 2)
// [1, 2]   [1, 3] [2, 3]   [1, 2] [3, 1] [3, 2] [1, 2]   [1, 3] [2, 3] [2, 1] [3, 1] [2, 3] [1, 2] [1, 3] [2, 3]
