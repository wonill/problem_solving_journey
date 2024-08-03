function solution(numbers) {
    const negative_nums = numbers.filter(v => v < 0)?.sort((a, b) => a - b);
    const positive_nums = numbers.filter(v => v >= 0)?.sort((a, b) => b - a);
    if (negative_nums.length < 2) 
        return positive_nums.length < 2 ? negative_nums[0] * positive_nums[0] : positive_nums[0] * positive_nums[1];
    if (positive_nums.length < 2)
        return negative_nums[0] * negative_nums[1];
    return Math.max(positive_nums[0] * positive_nums[1], negative_nums[0] * negative_nums[1]);
}