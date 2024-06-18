function solution(nums) {
    return nums.length / 2 > new Set(nums).size ? new Set(nums).size : nums.length / 2; 
}