import java.util.*;
class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        
		Map<Integer, HashSet<String>> userMap = new HashMap<>();
		Map<String, Integer> userIndex = new HashMap<>();
		
		for(int i = 0; i < id_list.length; i++) {
			userMap.put(i, new HashSet<>());
		}
		
		for(int i = 0; i < id_list.length; i++) {
			userIndex.put(id_list[i], i);
		}
		
		for(int i = 0; i < report.length; i++) {
			String[] reportAndReported = report[i].split(" ");
			userMap.get(userIndex.get(reportAndReported[0])).add(reportAndReported[1]);
		}
		
		Map<String, Integer> reportedMap = new HashMap<>();
		
		
		for(Integer key : userMap.keySet()) {
			Iterator<String> it = userMap.get(key).iterator();
			while(it.hasNext()) {
				String reported = it.next();
				reportedMap.put(reported, reportedMap.getOrDefault(reported, 0) + 1);
			}
			
		}
		
		List<String> suspended = new ArrayList<>();
		
		for(String key : reportedMap.keySet()) {
			if(reportedMap.get(key) >= k) {
				suspended.add(key);
			}
		}
		
		int[] inbox = new int[id_list.length];
		
		System.out.println(suspended);
		
		for(Integer key : userMap.keySet()) {
			Iterator<String> it = userMap.get(key).iterator();
			while(it.hasNext()) {
				String reported = it.next();
				if(suspended.contains(reported)) {
					inbox[key]++;
				}
			}
			
		}
		
		
		return inbox;
    }
}