function solution(lines) {
     let answer = 0;
  const map = new Map();
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      map.set(j, (map.get(j) || 0) + 1);
    }
  }
  for (let [key, value] of map) {
    if (value >= 2) answer++;
  }
  return answer;
}