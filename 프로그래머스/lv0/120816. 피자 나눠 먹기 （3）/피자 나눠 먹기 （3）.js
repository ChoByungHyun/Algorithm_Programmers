function solution(slice, n) {
    var p = 0;
    if(n%slice != 0){
        p = parseInt(n/slice)+1   
    }else if(n%slice==0){
        p = parseInt(n/slice);
    }
    return p;
}