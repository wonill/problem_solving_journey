function solution(n, stations, w) {
  const range = 2 * w + 1;
  let signalless = [stations[0] - w - 1, n - stations[stations.length - 1] - w];
  for (let i = 0; i < stations.length - 1; i++) signalless.push(stations[i + 1] - stations[i] - range);
  return signalless.reduce((a, c) => a += c > 0 ? Math.ceil(c / range) : 0, 0);
}
