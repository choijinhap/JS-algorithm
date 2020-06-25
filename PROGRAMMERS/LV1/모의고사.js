function solution(answers) {
    var answer = [];
    let res_a=0,res_b=0,res_c=0,max=0;;
    let a=[1,2,3,4,5]
	let b=[2,1,2,3,2,4,2,5]
	let c=[3,3,1,1,2,2,4,4,5,5]
	for(let i=0;i<answers.length;i++){
	if(a[i%5]==answers[i]) {res_a++;}
    if(b[i%8]==answers[i]) {res_b++;}
    if(c[i%10]==answers[i]) {res_c++;}
}
    max=Math.max(res_a,res_b,res_c);
    if(res_a===max) answer.push(1);
    if(res_b===max) answer.push(2);
    if(res_c===max) answer.push(3);
    return answer;
}