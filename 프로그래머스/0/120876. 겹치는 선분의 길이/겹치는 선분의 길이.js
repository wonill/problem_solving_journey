function solution(lines) {
    let answer = 0;
    const field = Array(200).fill(0);
    for (let line of lines){
        let start = line[0] + 100;
        const end = line[1] + 100;
        for (start; start < end; start++){
            field[start]++;
        }
    }
    for (let i = 0; i < field.length; i++){
        if (field[i] > 1) answer++;
    }
    return answer;
}