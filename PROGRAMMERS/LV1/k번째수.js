function solution(array, commands) {
    var answer = [];
    answer=commands.map(item=>{return array.slice(item[0]-1,item[1]).sort((f,s)=>f>s)[item[2]-1]});
    return answer;
}