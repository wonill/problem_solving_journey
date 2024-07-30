const rotate = {
    right : (arr) => arr.slice(arr.length - 1).concat(arr.slice(0, arr.length - 1)),
    left : (arr) => arr.slice(1).concat(arr.slice(0, 1)),
}

function solution(numbers, direction) {
    return rotate[direction](numbers);
}