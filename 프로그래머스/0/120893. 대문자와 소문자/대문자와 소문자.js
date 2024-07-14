function solution(my_string) {
    return [...my_string].map(v => v.charCodeAt() <= 90 ? String.fromCharCode(v.charCodeAt() + 32) :
                             String.fromCharCode(v.charCodeAt() - 32)).join('');
}