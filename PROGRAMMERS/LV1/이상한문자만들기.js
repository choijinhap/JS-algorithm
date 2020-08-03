function solution(s) {
    var answer = '';
    let arr=s.split(' ');
    answer=arr.map(word=>{
        let temp='';
        for(let i=0;i<word.length;i++){
            if(i%2==0){
                temp+=word[i].toUpperCase();
            }else{
                temp+=word[i].toLowerCase();
            }
        }
        return temp;
    }).join(' ');
    return answer;
}
