function solution(binomial) {
    let b = binomial.split(' ');
    return b[1] == '+' ? Number(b[0]) + Number(b[2]) : b[1] == '-' ?  Number(b[0]) - Number(b[2]) :  Number(b[0]) * Number(b[2]);
}