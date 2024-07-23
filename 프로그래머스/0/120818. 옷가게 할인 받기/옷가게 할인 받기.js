function getDiscountRate(price){
    if (price >= 500000) return 0.2;
    if (price >= 300000) return 0.1;
    if (price >= 100000) return 0.05;
    return 0;
}

function solution(price) {
    return price - Math.round(price * getDiscountRate(price));
}