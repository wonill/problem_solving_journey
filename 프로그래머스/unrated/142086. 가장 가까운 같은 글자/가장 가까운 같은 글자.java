import java.util.*;
class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        Map<Character, Integer> strMap = new HashMap<>();
        for(int i = 0; i < s.length(); i++){
            answer[i] = strMap.get(s.charAt(i)) == null ? -1 : i-strMap.get(s.charAt(i));
            strMap.put(s.charAt(i), i);
        }
        return answer;
    }
}