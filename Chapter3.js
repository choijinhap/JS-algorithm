let a=0.1;
let b=0.2;
console.log(a+b===0.3);
//자바스크립트는 64비트 부동소수점을 사용한다.\
//Number객체만 사용한다.


//표현가능한숫자중 가장적은 차이. Number.EPSILON을 활용하여 같은숫자인지 확인가능
function numberEquals(x,y){
    return Math.abs(x-y) < Number.EPSILON
}

//가장 큰 정수
console.log(Number.MAX_SAFE_INTEGER +1 === Number.MAX_SAFE_INTEGER+2);

console.log(Number.MAX_SAFE_INTEGER +1.1 === Number.MAX_SAFE_INTEGER+2.2);

//가장큰값
console.log(Number.MAX_VALUE +1.1 === Number.MAX_VALUE+2.2);


console.log(Number.MAX_SAFE_INTEGER<Number.MAX_VALUE);

console.log(Number.MAX_SAFE_INTEGER<Infinity);

//최소도 위와 동일
Number.MIN_SAFE_INTEGER
Number.MIN_VALUE


-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity

//소수알고리즘
// #1 숫자 n을 2부터 n-1까지의 수로 나눠 나머지가 0인지 확인

function isPrime1(n){
    if(n<=1){
        return false;
    }
    for(var i =2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
//시간복잡도 O(n)

//최적화하기
//2,3,5,7,11,13,17,19,23,29,31,37...
//소수는 2와3을 제외하고는 6k ± 1이다.
//또 n이 소수인지 확인하려면 n의 제곱근까지만 확인해보면 된다.
function isPrime2(n){
    if(n<=1) return false;
    if(n<=3) return true;

    if(n%2==0 || n%3==0) return false;

    for(var i=5; i*i<n; i=i+6){
        if(n%i==0 || n%(i+2)==0) return false;
    }
    return true;
}
//시간복잡도 O(sqrt(n))

//소인수분해
function primeFactors(n){
    while(n%2==0){
        console.log(2);
        n=n/2;
    }

    for(var i=3; i*i<n;i=i+2){
        while(n%i==0){
            console.log(i);
            n=n/i;
        }
    }
    if(n>2){
        console.log(n);
    }
}
primeFactors(278);