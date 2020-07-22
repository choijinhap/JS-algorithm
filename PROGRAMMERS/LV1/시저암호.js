function solution(s, n) {
    let answer = '';
    let lowerLetter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let upperLetter=lowerLetter.map((letter)=>{ return letter.toUpperCase()});
    
    answer = s.split('').map((letter)=>{
        let ret = '';
        if(letter===' ') return ' ';
        
        if(letter===letter.toLowerCase()){
        let idx = lowerLetter.findIndex(input=>input===letter);
        ret = idx+n<lowerLetter.length?lowerLetter[idx+n]:lowerLetter[-lowerLetter.length+idx+n%lowerLetter.length];
        }
        else{
        let idx = upperLetter.findIndex(input=>input===letter);
        ret = idx+n<upperLetter.length?upperLetter[idx+n]:upperLetter[-upperLetter.length+idx+n%upperLetter.length];
        }
        return ret;
    }).join('');
    return answer;
}
