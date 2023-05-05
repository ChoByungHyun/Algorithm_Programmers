function solution(board, moves) {
   var answer = 0;
  var basket = [];
  for (var i = 0; i < moves.length; i++) {
    var col = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][col] !== 0) {
        basket.push(board[j][col]);
        board[j][col] = 0;
        if (basket[basket.length - 1] === basket[basket.length - 2]) {
          basket.pop();
          basket.pop();
          answer += 2;
        }
        break;
      }
    }
  }
    return answer;
}