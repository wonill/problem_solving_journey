function solution(my_string, s, e) {
    let strArr = my_string.split('');
    let arr = my_string.split('').splice(s, e - s + 1).reverse().join('');
    strArr.splice(s, e - s + 1, arr);
    return strArr.join('');
}