import java.util.*;
class Solution
{
    public int solution(String s)
    {
        int answer = 0;
        Stack<Character> alphabets = new Stack<>();

        for(char ss : s.toCharArray()){
            if(alphabets.size() != 0 && alphabets.peek() == ss){
                alphabets.pop();
                continue;
            }
            alphabets.push(ss);
        }

        return alphabets.size() == 0 ? 1 : 0;
    }
}