function solution(s) {
    var answer = '';
    let len=s.length;
    console.log(len);
    if(len%2==0){
        answer=s.charAt(len/2-1)+s.charAt(len/2);
    }else{
        answer=s.charAt(len/2);
    }
    return answer;
}

function solutionWithSubstr(s){
    let answer='';
    let len=s.length;
    answer=len%2==0?s.substr(len/2-1,2):s.substr(len/2,1);
    return answer;
}