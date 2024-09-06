function solution(n, stations, w) {
  let answer = 0;

  let signalless = [];
  signalless.push(stations[0] - w - 1);
  for (let i = 0; i < stations.length - 1; i++) {
    signalless.push(stations[i + 1] - stations[i] - 2 * w - 1);
  }
  signalless.push(n - stations[stations.length - 1] - w);
  for (let i = 0; i < signalless.length; i++) {
    if (signalless[i] > 0) answer += Math.ceil(signalless[i] / (2 * w + 1));
  }
  return answer;
}