function solution(arr)
{
    answer = arr.filter((el,idx)=>{
        return el!==arr[idx+1];
    })
    return answer;
}