class Solution {
    public int[] solution(long n) {
        String s = "" + n;
        int[] answer = new int[s.length()];
        StringBuilder sb = new StringBuilder(s);
        String ss = sb.reverse().toString();
        for(int i = 0; i < ss.length(); i++) {
        	answer[i] = ss.charAt(i) - '0';
        }
        return answer;
    }
}