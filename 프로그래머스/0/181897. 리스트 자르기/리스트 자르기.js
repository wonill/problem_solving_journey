const filtering = {
    1 : ([a, b, c], num_list) => num_list.filter((_, i) => i <= b),
    2 : ([a, b, c], num_list) => num_list.filter((_, i) => i >= a),
    3 : ([a, b, c], num_list) => num_list.filter((_, i) => i >= a && i <= b),
    4 : ([a, b, c], num_list) => num_list.filter((_, i) => i >= a && i <= b && (i - a) % c === 0)
}

function solution(n, slicer, num_list) {
    return filtering[n](slicer, num_list);
}