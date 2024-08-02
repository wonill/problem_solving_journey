const extractNumbers = (str) => {
    return str.match(/\d+/g) || [];
}

function solution(my_string) {
    const extractedNumbers = my_string.match(/\d+/g);
    return extractedNumbers ? extractedNumbers.reduce((a, c) => a + Number(c), 0) : 0;
}