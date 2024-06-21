function solution(wallpaper) {
    let rows = [];
    let columns = [];
    for (let i = 0; i < wallpaper.length; i++){
        if (wallpaper[i].includes("#")){
            rows.push(i);
            columns.push(wallpaper[i].indexOf('#'));
            columns.push(wallpaper[i].lastIndexOf('#'));
        }
    }
    return [Math.min(...rows), Math.min(...columns), Math.max(...rows) + 1, Math.max(...columns) + 1];
}