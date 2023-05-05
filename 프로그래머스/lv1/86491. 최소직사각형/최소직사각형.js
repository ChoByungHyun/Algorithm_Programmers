function solution(sizes) {
  //0에 더 큰 인덱스를 담는다.
  //제일 큰 0과 제일 큰 1을 선택해 곱한다.
  let temp = 0;
  let wmax = [];
  let hmax = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
    wmax.push(Math.max(sizes[i][0]));
    hmax.push(Math.max(sizes[i][1]));
  }

  return Math.max(...wmax) * Math.max(...hmax);
}