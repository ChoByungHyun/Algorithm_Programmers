function solution(answers) {
  let answer = [];

  let arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === arr[i][j % arr[i].length]) {
        count++;
      }
    }
    answer.push(count);
  }
  let max = Math.max(...answer);
  let index = [];

  answer.forEach((el, idx) => {
    if (el === max) {
      index.push(idx + 1);
    }
  });
  return index;
}