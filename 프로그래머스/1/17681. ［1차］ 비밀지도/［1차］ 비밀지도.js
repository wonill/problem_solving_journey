function solution(n, arr1, arr2) {
    var answer = [];
    arr1 = arr1.map(v => v.toString(2).padStart(arr1.length, '0'));
    arr2 = arr2.map(v => v.toString(2).padStart(arr2.length, '0'));    
    for (let i = 0; i < arr1.length; i++){
        let row = '';
        for (let j = 0; j < arr1[i].length; j++){
            if (arr1[i][j] ==='1' || arr2[i][j] === '1') row += '#';
            else row += ' ';
        }
        answer.push(row);
    }
    return answer;
}

