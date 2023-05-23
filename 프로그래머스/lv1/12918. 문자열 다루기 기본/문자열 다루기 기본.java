class Solution {
    public boolean solution(String s) {
        boolean answer = true;
        for(char ch : s.toCharArray()){
            if(!Character.isDigit(ch)){
                return false;
            }
            if(s.length() != 4 && s.length() != 6){
                return false;
            }
        }
        return answer;
    }
}