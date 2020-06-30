function solution(arr)
{
    var answer = [];
    answer=arr.reduce((acc,val)=>{
        if(acc[acc.length-1]!==val){
            acc.push(val);
        }
        return acc;
    },[]);
    
    return answer;
}