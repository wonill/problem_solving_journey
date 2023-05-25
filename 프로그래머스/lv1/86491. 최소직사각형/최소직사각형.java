class Solution {
    public int solution(int[][] sizes) {
        int length = 0;
        int height = 0;
        
        for(int[] purse : sizes) {
        	length = Math.max(length, Math.max(purse[0], purse[1]));
        	height = Math.max(height, Math.min(purse[0], purse[1]));
        }
        
        return length*height;
    }
}