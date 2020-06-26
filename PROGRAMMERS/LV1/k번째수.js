function solution(array, commands) {
    var answer = [];
    answer=commands.map(item=>{return array.slice(item[0]-1,item[1]).sort((f,s)=>f>s)[item[2]-1]});
    // answer=commands.map(([from,to,k])=>{return array.slice(from-1,to).sort((f,s)=>f>s)[k-1]});
    
    return answer;
}
