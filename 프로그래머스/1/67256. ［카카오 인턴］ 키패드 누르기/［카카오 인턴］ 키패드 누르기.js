function position(num){
    if (num === '*') num = '10';
    if (num === '0') num = '11';
    if (num === '#') num = '12';
    let number = parseInt(num);
    return [parseInt((number - 1) / 3), (number - 1) % 3];
}

function distance(finger, target){
    let fingerLocation = position(finger);
    let targetLocation = position(target);
    return Math.abs(fingerLocation[0] - targetLocation[0]) + 
                     Math.abs(fingerLocation[1] - targetLocation[1]);
}

function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#';
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer += 'L';
            left = numbers[i] + '';
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer += 'R';
            right = numbers[i] + '';
        } else {
            if (distance(left, numbers[i] + '') < distance(right, numbers[i] + '')){
                answer += 'L';
                left = numbers[i] + '';
            } else if (distance(left, numbers[i] + '') > distance(right, numbers[i] + '')){
                answer += 'R';
                right = numbers[i] + '';
            } else {
                if (hand === 'right'){
                    answer += 'R';
                    right = numbers[i] + '';
                } else {
                    answer += 'L';
                    left = numbers[i] + '';
                }
            }
        }
    }
    return answer;
}