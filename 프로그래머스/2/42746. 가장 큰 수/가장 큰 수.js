function sortNumber(a, b){
    if (a.length === b.length) return b.localeCompare(a);
    return (b+a).localeCompare(a+b);
}

function solution(numbers) {
    if (numbers.reduce((a, b) => a + b) === 0) return '0'; 
    return numbers.map(v => v.toString()).sort((a, b) => sortNumber(a, b)).join('');
}