class Solution {
    public int solution(int n) {
        int answer = 0;
        StringBuilder sb = new StringBuilder();
        while(n != 0){
            sb.append(n%3); 
            n = n/3;
        }
        String str = sb.reverse().toString();
        for(int i = 0; i < str.length(); i++){
            answer += Math.pow(3,i) * (str.charAt(i) - '0');
        }
        return answer;
    }
}