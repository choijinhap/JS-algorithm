function solution(s){
    let answer = true;
    let p_count=0,y_count=0;
    for(let i=0;i<s.length;i++){
        if(s.toLowerCase().charAt(i)==='p') p_count++;
        else if(s.toLowerCase().charAt(i)==='y') y_count++;
    }
    answer=p_count===y_count?true:false;
    return answer;
}