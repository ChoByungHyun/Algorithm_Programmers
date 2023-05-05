function solution(numer1, denom1, numer2, denom2) {
   var numer3, numer4, denom3, denom4, numsum, desum = 0;
    var maximum = 1;
    numer3 = numer1 * denom2;
    numer4 = numer2 * denom1;
    denom3 = denom1 * denom2;
    
    numsum = numer3 + numer4;
    desum = denom3;
    
       for(let i = 1 ; i <= numsum ; i ++) {
        if(numsum%i === 0 && desum%i === 0) {
            maximum = i
        }
    }
    return [numsum/maximum,desum/maximum ]
    }
    
