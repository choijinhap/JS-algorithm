function solution(a, b) {
    var answer = '';
    let month=[1,2,3,4,5,6,7,8,9,10,11,12];
    let day=[31,29,31,30,31,30,31,31,30,31,30,31];
    let date=["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let sum=0;
    for(let i=0;i<a-1;i++){
        sum+=day[i];
    }
    sum+=b;
    answer=date[ (sum-1)%7>1 ? (sum-1)%7-2 : (sum-1)%7+5 ];
    return answer;
}

