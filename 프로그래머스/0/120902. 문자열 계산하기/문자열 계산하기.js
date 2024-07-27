const op = {
    '+' : (a, b) => Number(a) + Number(b),
    '-' : (a, b) => Number(a) - Number(b)
}

function solution(my_string) {
    let sign = '+'
    return my_string.split(' ').reduce((a, c) => {
        if (c === '+' ||  c === '-') {
            sign = c;
            return a;
        }
        return op[sign](a, c);
    }, 0);
}