function solution(order) {
    return order.reduce((price, coffee) => price + (coffee.includes('cafelatte') ? 5000 : 4500), 0);
}