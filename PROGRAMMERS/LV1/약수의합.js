function solution(n) {
    let answer = 0;
    for(let i=0;i<=n;i++){
        if(n%i==0){
            answer+=i;
        }
    }
    return answer;
}

const state={[0]:{a:'a'},[1]:{b:'b'}}
console.log([state].map((a,b)=>Object.values(a)))
console.log(Object.values(state))
console.log([state[Object.keys(state)]])
console.log(Object.keys(state))
