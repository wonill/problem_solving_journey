function solution(babbling) {
    return babbling.filter(v =>{
        return !v.replaceAll("aya", ' ').replaceAll("ye", ' ').replaceAll("woo", ' ').replaceAll("ma", ' ').trim().length;
    }).length;
}
