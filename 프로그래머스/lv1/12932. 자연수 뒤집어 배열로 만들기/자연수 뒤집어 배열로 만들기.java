class Solution {
    public int[] solution(long n) {
        
        String input = Long.toString(n);
        int length = input.length();
        int[] answer = new int[length];
        for(int i = 0; i<length; i++){
            answer[i] = input.charAt(length - 1 - i) - '0';
        }
        return answer;
    }
}