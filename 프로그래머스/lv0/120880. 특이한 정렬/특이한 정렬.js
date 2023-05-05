function solution(numlist, n) {
    //절대값으로 값을 빼고 ㅇㅇ math.abs
    //아 그 뺀 값이 작은 순서대로 놓는데 원래 값은 가져와야함.
    //뺀 값이 같다면 큰수를 앞에 해주는 처리가 필요함.
    
    var answer = [];
    answer = numlist.sort((a,b)=> {
     const zero =  Math.abs(a-n)-Math.abs(b-n);
        if(zero===0){
         
        return b-a;

        }
        return zero;
    }
);
    
    
    return answer;
}