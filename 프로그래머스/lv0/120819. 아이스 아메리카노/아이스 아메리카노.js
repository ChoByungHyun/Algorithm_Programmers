function solution(money) {
    var coffee =  money/5500;
    var changes = money%5500;
    var arr= [];
    arr.push(parseInt(coffee));
    arr.push(parseInt(changes));
    
    return arr;
}