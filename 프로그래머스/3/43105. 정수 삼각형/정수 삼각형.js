function solution(triangle) {
    for (let i = 0; i < triangle.length; i++){
        for (let j = 0; j < triangle[i].length; j++){
            let up = triangle[i][j];
            let upleft = triangle[i][j];
            if (j < triangle[i].length - 1) up += triangle[i - 1][j];
            if (j != 0) upleft += triangle[i - 1][j - 1];
            triangle[i][j] = Math.max(up, upleft);
        }
    }
    return Math.max(...triangle[triangle.length - 1]);
}