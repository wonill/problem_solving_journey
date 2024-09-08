function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    for (let i = 0, j = people.length; i <= --j;) {
      if (people[i] + people[j] <= limit) i++;
      answer++;
    }
    return answer;
  }
  
