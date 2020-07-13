function solution(s) {
    let answer = true;
    if(s.length!==4&&s.length!==6){
        console.log(s);
        return false;
    }
    for(let i=0;i<s.length;i++){
        if( !(parseInt(s[i])>-1)){
           return false;
           }
    }
    return answer;
}