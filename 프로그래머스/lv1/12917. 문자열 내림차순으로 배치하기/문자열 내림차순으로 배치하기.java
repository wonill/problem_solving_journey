import java.util.Arrays;
class Solution {
    public String solution(String s) {
        String answer = "";
        int length = s.length();
        String[] arr = new String[length];
        for(int i = 0; i < length; i++){
            arr[i] = s.substring(i,i+1); 
        }
        Arrays.sort(arr);
        return answer = new StringBuilder(String.join("",arr)).reverse().toString();
    }
}