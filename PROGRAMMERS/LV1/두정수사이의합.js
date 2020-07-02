function solution(a, b) {
    let answer = 0;
    let tmp;
    if(a>b){
        tmp=a;
        a=b;
        b=tmp;
    }
    for(let i=a;i<=b;i++){
        answer+=i;
    }
    return answer;
}