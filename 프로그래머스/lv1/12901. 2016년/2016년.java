class Solution {
    public String solution(int a, int b) {
        String answer = "";
        String[] dayOfWeek = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
        if(a == 1){
            answer = dayOfWeek[(b+4)%7];
        } else if (a == 2){
            answer = dayOfWeek[b%7];
        } else if (a == 3){
            answer = dayOfWeek[(b+1)%7];
        }  else if (a == 4){
            answer = dayOfWeek[(b+4)%7];
        } else if (a == 5){
            answer = dayOfWeek[(b-1)%7];
        } else if (a == 6){
            answer = dayOfWeek[(b+2)%7];
        } else if (a == 7){
            answer = dayOfWeek[(b+4)%7];
        } else if (a == 8){
            answer = dayOfWeek[b%7];
        } else if (a == 9){
            answer = dayOfWeek[(b+3)%7];
        } else if (a == 10){
            answer = dayOfWeek[(b+5)%7];
        } else if (a == 11){
            answer = dayOfWeek[(b+1)%7];
        } else if (a == 12){
            answer = dayOfWeek[(b+3)%7];
        } 
        
        
        return answer;
        //1 31  1일 금요일
        //2 29  1일 월요일
        //3 31  1일 화요일
        //4 30  1일 금요일
        //5 31  1일 일요일 
        //6 30  1일 수요일
        //7 31  1일 금요일
        //8 31  1일 월요일
        //9 30  1일 목요일
        //10 31 1일 토요일
        //11 30 1일 화요일
        //12 31 1일 목요일
    }
}