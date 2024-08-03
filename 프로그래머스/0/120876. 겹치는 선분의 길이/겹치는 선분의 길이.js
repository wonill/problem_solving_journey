function solution(lines) {
    const field = Array(200).fill(0);
    for (let line of lines){
        let start = line[0] + 100;
        const end = line[1] + 100;
        for (start; start < end; start++){
            field[start]++;
        }
    }
    return field.reduce((a, c) => c > 1 ? a += 1 : a, 0);
}