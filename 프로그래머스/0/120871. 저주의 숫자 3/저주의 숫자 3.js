function solution(n) {
    let three_x_number = 0;
    let i = 0;
    while (i++ < n){
        three_x_number++;
        while (three_x_number % 3 === 0 || String(three_x_number).includes('3')) three_x_number++;
    }
    return three_x_number;
}