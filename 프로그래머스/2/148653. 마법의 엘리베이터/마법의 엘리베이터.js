function createFive(n){
    if (n === 1) return 5;
    let num = '';
    for (let i = 0; i < n; i++){
        if (i === n - 1){
            num += '4';
            break;
        }
        num += '5';
    }
    return Number(num);
}

function solution(storey) {
    var answer1 = 0;
    let power = storey.toString().length;
    while (power >= 0){
        let move = 0;
        while (10 ** power * move <= storey) move++;
        let a = 10 ** power * move;
        let b = 10 ** power * (move - 1);
        if(storey - b <= createFive(power)){
            move -= 1;
            storey -= b;
        }
        else storey = a - storey;
        answer1 += move;
        power--;
    }
    return answer1;
}