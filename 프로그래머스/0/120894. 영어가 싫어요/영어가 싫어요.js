

function solution(numbers) {
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < 10; i++) numbers = numbers.replaceAll(numArr[i], i);
    return Number(numbers);
}