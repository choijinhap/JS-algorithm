
//소인수분해
function primeFactors(n){
    //2로 나눠지는 만큼 2 출력
    while(n%2==0){
        console.log(2);
        n=n/2;
    }

    //3부터 n의 제곱근까지 나누어떨어지면 출력하고 나눠줌 짝수는 위에서 걸렀으므로 i=i+2
    for(var i=3; i*i<n;i=i+2){
        while(n%i==0){
            console.log(i);
            n=n/i;
        }
    }
    //소수일경우 그냥 n출력
    if(n>2){
        console.log(n);
    }
}
let a=125;
primeFactors(a);
//숫자는 복사해서 써서 값 안바뀜
console.log(a);