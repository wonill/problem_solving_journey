class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        for(int x = 1; x <= yellow; x++) {
        	if(yellow % x != 0) {
        		continue;
        	}
        	if((x + 2)*(yellow/x + 2) == brown + yellow) {
        		answer[0] = x+2;
        		answer[1] = yellow/x+2;
        	}
        	
        }
        return answer;
    }
}