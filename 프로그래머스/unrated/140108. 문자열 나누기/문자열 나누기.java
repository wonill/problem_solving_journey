class Solution {
    public int solution(String s) {
        int answer = 0;
        char x = s.charAt(0);
        int cnt = 0;
        int diff = 0;
        
        for(int i = 0; i < s.length(); i++){
            char ch = s.charAt(i);
            
            if(x == ch){
                cnt++;
            } else{
                diff++;
            }
            
            if(cnt == diff){
                answer++;
                x = i < s.length() - 1 ? s.charAt(i+1) : ' ';
                cnt = 0;
                diff = 0;
            }
        }
        
        return answer = cnt == diff ? answer : answer + 1;
    }
}