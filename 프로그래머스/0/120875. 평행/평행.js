function getInclination(a, b){
    return (b[1] - a[1]) / (b[0] - a[0]);
}

function solution(dots) {
    if(getInclination(dots[0], dots[1]) === getInclination(dots[2], dots[3])
      || getInclination(dots[0], dots[2]) === getInclination(dots[1], dots[3])
      || getInclination(dots[0], dots[3]) === getInclination(dots[1], dots[2])){
        return 1;
    }
    return 0;
}
