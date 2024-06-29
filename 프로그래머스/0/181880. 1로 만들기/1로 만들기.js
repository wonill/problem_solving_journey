function solution(num_list) {
    return num_list.reduce((a, b) => {
        let count = 0;
        while (b != 1){
            b = parseInt(b / 2);
            count++;
        }
        return a + count;
    },0);
}