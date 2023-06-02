class Solution {
    public String solution(String rny_string) {
        String answer = "";
        for(char ch : rny_string.toCharArray()){
            if(ch == 'm'){
                answer += 'r';
                answer += 'n';
            } else{
                answer += ch;
            }
                
        }
        return answer;
    }
}