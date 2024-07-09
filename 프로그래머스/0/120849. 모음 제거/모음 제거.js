function solution(my_string) {
    return my_string.split('').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('');
}