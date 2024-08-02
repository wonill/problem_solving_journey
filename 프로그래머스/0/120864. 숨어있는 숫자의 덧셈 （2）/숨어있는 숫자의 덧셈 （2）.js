const extractNumbers = (str) => {
    return str.match(/\d+/g) || [];
}

function solution(my_string) {
    const extractedNumbers = my_string.match(/\d+/g);
    return extractedNumbers ? extractedNumbers.map(Number).reduce((a, c) => a + c, 0) : 0;
}