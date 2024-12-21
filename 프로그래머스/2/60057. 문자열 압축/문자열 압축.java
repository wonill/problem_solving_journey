import java.util.*;
class Solution {
    static class Element{
        int value;
        String str;
        public String toString(){
            return value + " " + str;
        }
    }
    static int answer;
    static int length;
    static Stack<Element> stack = new Stack<>();
    static StringBuilder sb = new StringBuilder();
    static String [] array;
    public int solution(String s) {
        answer = s.length();
        length = answer;
        array = new String[length];
        for(int i = 0; i < length; i++){
            array[i] = Character.toString(s.charAt(i));
        }
        for(int i = 1; i <= length / 2; i++){
            check(i);
        }
        return answer;
    }
    public static void check (int size){
        Element start = new Element();
        start.str = array[0];
        stack.push(start);
        int cnt = 1;
        for(int i = 1; i < length; i++){
            if(stack.peek().str.length() < size){
                stack.peek().str += array[i];
            }
            else{
                Element temp = new Element();
                temp.str = array[i];
                stack.push(temp);
                cnt++;
            }
            if(cnt == 2 && stack.peek().str.length() == size){
                Element temp = stack.pop();
                if(temp.str.equals(stack.peek().str)){
                    if(stack.peek().value == 0){
                        stack.peek().value = 2;
                    }
                    else stack.peek().value++;
                }
                else{
                    stack.push(temp);
                }
                cnt--;
            }
        }
        result();
    }
    public static void result(){
        sb.setLength(0);
        while(!stack.isEmpty()){
            Element cur = stack.pop();
            if(cur.value > 0){
                sb.append(cur.value);
                sb.append(cur.str);
            }
            else sb.append(cur.str);
        }
        answer = Math.min(answer, sb.length());
        stack.clear();
    }
}