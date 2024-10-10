function solution(topping) {
    let cnt = 0;
    
    let chulsu = [];
    let brother = [];
    
    let set = new Set();
    for (let i = 0; i < topping.length; i++) {
        set.add(topping[i]);
        chulsu.push(set.size);
    }
    
    set.clear();
    
    for (let j = topping.length - 1; j >= 0; j--){
        set.add(topping[j]);
        brother.push(set.size);
    }
    
    brother.reverse();
    
    for (let i = 0; i < topping.length - 1; i++) {
        if (chulsu[i] === brother[i + 1]) cnt++;
    }
    
    return cnt;
}

