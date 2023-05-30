class Solution {
    public String solution(String my_string, String alp) {
        String answer = "";
        loop:
        for(char s : my_string.toCharArray()){
            for(char a : alp.toCharArray()){
                if(s == a){
                    answer += Character.toUpperCase(s);
                    continue loop;
                }
            }
            answer += s;
        }
        return answer;
    }
}