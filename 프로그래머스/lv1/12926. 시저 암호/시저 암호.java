class Solution {
    public String solution(String s, int n) {
        String answer = "";
        
        for(int i = 0;i < s.length(); i++){
            char c = s.charAt(i);
            if(c == ' '){
                answer += c;
            } else if(c >= 'A' && c <= 'Z' && c+n > 'Z' || c >= 'a' && c <= 'z' && c+n > 'z'){
                answer += (char)(c+n-26);
            } else{
                answer += (char)(c+n);
            }
            
        }
        
        return answer;
    }
}