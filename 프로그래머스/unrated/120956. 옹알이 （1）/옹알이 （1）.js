function solution(babbling) {
      let answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;
  for (let i = 0; i < babbling.length; i++) {
    if (regex.test(babbling[i])) answer++;
  }
  return answer;
}