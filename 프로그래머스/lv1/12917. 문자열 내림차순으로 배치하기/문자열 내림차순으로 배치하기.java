import java.util.Arrays;
class Solution {
    public String solution(String s) {
        String answer = "";
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        return answer = new StringBuilder(new String(arr)).reverse().toString();
    }
}