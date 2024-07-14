function solution(my_string) {
    return [...my_string].map(v => v.toLowerCase() === v ? v.toUpperCase() : v.toLowerCase()).join('');
}