class Solution {
    public String solution(String code) {
        String answer = "";
        int mode = 0;
        for(int i = 0; i < code.length(); i++){
            char ch = code.charAt(i);
           if(Character.isDigit(ch)){
               mode = Math.abs(mode-1);
               continue;
           }
           if(mode == 0){
               if(i % 2 == 0){
                   answer += ch;
               }
           } else if(mode == 1){
               if(i % 2 == 1){
                   answer += ch;
               }
           }     
        }
        return answer.equals("") ? "EMPTY" : answer;
    }
}