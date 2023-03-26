function solution(n, k) {
    var s = n;
    while(true){
        if(s >= 10){
            s= s-10;
            k= k-1;
        }
        if(s<10){
            break;
        }
    }
    n = n *12000;
    k = k *2000;
    var sum = n+k;
    return sum;
}