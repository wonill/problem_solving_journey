import java.util.*;
class Solution {
    public String solution(String s) {
        String answer = "";
		String[] nums = s.split(" ");
		int[] numbers = new int[nums.length];
		
		for(int i = 0; i < nums.length; i++) {
			numbers[i] = Integer.parseInt(nums[i]);
		}
		
		Arrays.sort(numbers);
		
		answer = numbers[0] + " " + numbers[numbers.length-1];
		
		return answer;
    }
}