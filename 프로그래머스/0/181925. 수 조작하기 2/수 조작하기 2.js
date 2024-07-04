const manipulate = {
    '1'  : 'w',
    '-1' : 's',
    '10' : 'd',
    '-10': 'a'
};
function solution(numLog) {
    return numLog.map((v, i, arr) => arr[i] - arr[i - 1]).filter((_, i) => i > 0).reduce((a, b) => a + manipulate[b],'')
}