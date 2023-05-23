class Solution {
    public String solution(int a, int b) {
        String[] dayOfWeek = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
        int[] last_days = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int days = 0;
        for(int i = 0; i < a; i++){
            days += i == a-1 ? b : last_days[i];
        }
        return dayOfWeek[(days+4)%7];
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