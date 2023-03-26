function solution(n) {
    var p = 0;
    if(n%7 != 0){
        p = parseInt(n/7)+1   
    }else if(n%7==0){
        p = parseInt(n/7);
    }

    return p;
}