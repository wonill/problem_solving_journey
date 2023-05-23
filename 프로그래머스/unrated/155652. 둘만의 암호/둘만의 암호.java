import java.util.*;
class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        
        Map<Character, Boolean> skipMap = new HashMap<>();
        
        for(int i = 0; i < skip.length(); i++){
            skipMap.put(skip.charAt(i), true);
        }
        
        for(int i = 0; i < s.length(); i++){
            char ch = s.charAt(i);
     
            for(int j = 0; j < index; j++){
                ch = (char)(ch + 1);
                
                if(ch > 'z'){
                    ch = (char)(ch - 26);
                }
                
              
                if(skipMap.containsKey(ch)){
                    j--;
                    continue;
                }
                
                
            }
            
            answer+= ch;
        }
        
        return answer;
    }
}