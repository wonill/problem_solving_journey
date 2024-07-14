

function solution(numbers) {
    return Number(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].reduce((a, c, i) =>
                                        a.replaceAll(c, i) , numbers));
}