function solution(my_string, queries) {
    for (let query of queries){
        let arr = my_string.split('').slice(query[0], query[1] + 1).reverse().join('');
        let str = my_string.split('');
        str.splice(query[0], query[1] - query[0] + 1, arr);
        my_string = str.join('');
    }
    return my_string;
}