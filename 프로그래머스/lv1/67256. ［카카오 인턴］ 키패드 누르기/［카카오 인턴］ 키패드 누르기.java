class Solution {
    public String solution(int[] numbers, String hand) {
        String answer = "";
        int[] left = {3, 0};
        int[] right = {3, 2};
        for(int i = 0; i < numbers.length; i++) {
        	int x = numbers[i] == 0? 3 : (numbers[i]-1)/3;
        	int y = numbers[i] == 0? 1 : (numbers[i]+2)%3; 
        	if(numbers[i] % 3 == 1) {
        		answer += "L";
        		left[0] = x;
        		left[1] = y;
        	} else if(numbers[i] % 3 == 0 && numbers[i] != 0) {
        		answer += "R";
        		right[0] = x;
        		right[1] = y;
        	} else if(Math.abs(left[0]-x) + Math.abs(left[1]-y) < Math.abs(right[0]-x) + Math.abs(right[1]-y)) {
        		answer += "L";
        		left[0] = x;
        		left[1] = y;
        	} else if(Math.abs(left[0]-x) + Math.abs(left[1]-y) > Math.abs(right[0]-x) + Math.abs(right[1]-y)) {
        		answer += "R";
        		right[0] = x;
        		right[1] = y;
        	} else if(Math.abs(left[0]-x) + Math.abs(left[1]-y) == Math.abs(right[0]-x) + Math.abs(right[1]-y)) {
        		if(hand.equals("left")) {
        			answer += "L";
            		left[0] = x;
            		left[1] = y;
        		} else {
        			answer += "R";
            		right[0] = x;
            		right[1] = y;
        		}
        	}
        }
        return answer;
    }
}