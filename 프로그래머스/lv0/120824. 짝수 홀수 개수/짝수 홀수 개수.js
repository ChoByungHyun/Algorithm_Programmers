function solution(num_list) {
    var arr= [];
            var list1 = 0;
        var list2 = 0;
    for(var i = 0; i<=num_list.length; i++ ){
        if(num_list[i] % 2 == 0){
            list1++;
        }else if(num_list[i] % 2 == 1){
            list2++;
        }
    }
    arr.push(list1);
    arr.push(list2);
    return arr;
}