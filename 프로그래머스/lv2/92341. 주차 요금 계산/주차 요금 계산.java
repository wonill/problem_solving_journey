import java.util.*;
class Solution {
    public int[] solution(int[] fees, String[] records) {
       int[] answer = {};
       Map<String, String> parkingMap = new HashMap<>();
       Map<String, Integer> timeMap = new HashMap<>();
       for(int i = 0; i < records.length; i++) {
    	   //info[1]은 차 번호 info[0]은 시분
    	   String[] info = records[i].split(" ");
    	   if(info[2].equals("IN")) {
    		   parkingMap.put(info[1], info[0]);
    		   //timeMap.put(info[1], timeMap.getOrDefault(info[1], 0));
    	   } else {
    		   timeMap.put(info[1], timeMap.getOrDefault(info[1], 0) + 
                           calculateTime(parkingMap.get(info[1]), info[0]));
    		   parkingMap.remove(info[1]);
    	   }
       }
       //들어왔는데 나가질 않은놈
       if(parkingMap != null) {
    	   for(String key : parkingMap.keySet()) {
    		   timeMap.put(key, timeMap.getOrDefault(key, 0) + calculateTime(parkingMap.get(key), "23:59"));
    	   }
       }
        
       List<String> keyList = new ArrayList<>(timeMap.keySet());
       Collections.sort(keyList);
       answer = new int[timeMap.size()];
       int i = 0;
       for(String key : keyList) {
    	   answer[i++] = calculateFee(timeMap.get(key), fees);
       }
       
        
        return answer;
    }
	
	public int calculateTime(String IN, String OUT) {
		//out[0] 나간 시    out[1] 나간 분
		String[] out = OUT.split(":");
		//in[0] 들어온 시	   in[1] 들어온 분
		String[] in = IN.split(":");
		
		int time = (Integer.parseInt(out[0])*60 + Integer.parseInt(out[1])) - 
            (Integer.parseInt(in[0])*60 + Integer.parseInt(in[1]));
		return time;
		
	}
	
	public int calculateFee(int time, int[] fees) {
		int fee = fees[1] + (int)Math.ceil((time - fees[0])/(double)fees[2])*fees[3];
		fee = fee <= fees[1] ? fees[1] : fee;
		return fee;
	}
}