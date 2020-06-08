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
