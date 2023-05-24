class Solution {
    public String solution(int[] numbers, String hand) {
        String answer = "";
        int[] left = {3, 0};
        int[] right = {3, 2};
        for(int i = 0; i < numbers.length; i++) {
        	int x = numbers[i] == 0? 3 : (numbers[i]-1)/3;
        	int y = numbers[i] == 0? 1 : (numbers[i]+2)%3; 
        	
        	if(getSuitableFinger(x, y, left, right, numbers[i], hand).equals("left")) {
        		answer += "L";
        		left[0] = x;
        		left[1] = y;
        	} else {
        		answer += "R";
        		right[0] = x;
        		right[1] = y;
        	}
        	
        }
        return answer;
    }
    
    public String getSuitableFinger(int x, int y, int[] left, int[] right, int number, String hand) {
		if(number % 3 == 1) {
    		return "left";
    	} else if(number % 3 == 0 && number != 0) {
    		return "right";
    		
    	} else if(Math.abs(left[0]-x) + Math.abs(left[1]-y) < Math.abs(right[0]-x) + Math.abs(right[1]-y)) {
    		return "left";
    		
    	} else if(Math.abs(left[0]-x) + Math.abs(left[1]-y) > Math.abs(right[0]-x) + Math.abs(right[1]-y)) {
    		return "right";
    		
    	} else {
    		return hand;
    	}
	}
}