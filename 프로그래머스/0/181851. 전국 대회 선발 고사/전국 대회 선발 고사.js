function solution(rank, attendance) {
    let selected = rank.filter((_, i) => attendance[i]);
    while (selected.length > 3) selected.splice(selected.indexOf(Math.max(...selected)), 1);
    selected.sort((a, b) => a - b);
    return rank.indexOf(selected[0]) * 10000 + rank.indexOf(selected[1]) * 100 + rank.indexOf(selected[2]);
}