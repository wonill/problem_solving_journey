import java.util.*;
class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        int[] answer = {};
       Map<String, Integer> expire_period = new HashMap<>();
		for(String term : terms) {
			String[] splited = term.split(" ");
			expire_period.put(splited[0], Integer.parseInt(splited[1]));
		}
		
		List<Integer> destroyList = new ArrayList<>();
		
		for(int i = 0; i < privacies.length; i++) {
			boolean destroy = false;
			
			String[] splited = privacies[i].split(" ");
			String[] splitedDate = splited[0].split("\\.");
			
			int year = Integer.parseInt(splitedDate[0]);
			int month = Integer.parseInt(splitedDate[1]) + expire_period.get(splited[1]);
			int day = Integer.parseInt(splitedDate[2]);
			
			while(true) {
				if(month > 12) {
					month -= 12;
					year += 1;
				} else {				
					break;
				}
			}
			System.out.println("유효기간은 " + year + "년 " + month + "월 " + day + "일까지" );
			
			
			String[] splitedToday = today.split("\\.");
			int currentYear = Integer.parseInt(splitedToday[0]);
			int currentMonth = Integer.parseInt(splitedToday[1]);
			int currentDate = Integer.parseInt(splitedToday[2]);
			
			System.out.println("오늘은 " + currentYear + "년 " + currentMonth + "월 " + currentDate + "일");
			
			if(currentYear > year || 
					currentYear == year && currentMonth > month || 
					currentYear == year && currentMonth == month && currentDate >= day) {
				destroy = true;
			} 
			
			if(destroy) {
				destroyList.add(i + 1);
			}
			
		}
		
		int[] destroyArr = new int[destroyList.size()];
		for(int i = 0; i < destroyArr.length; i++) {
			destroyArr[i] = destroyList.get(i);
		}
		
		answer = destroyArr;
        return answer;
    }
}