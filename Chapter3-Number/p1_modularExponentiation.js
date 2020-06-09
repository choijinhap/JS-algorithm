// (x^y)%p 계산하기

function me1(base,exponent,modulus){
    return Math.pow(base,exponent)%modulus;
}
console.log(me1(2,4,3));
//64비트 부동소수점에 담을 수 없는 큰 수는 못한다. 
console.log(me1(91,4,11));

// c % m = ( a * b ) % m
//=== ( ( a % m ) * ( b % m ) ) % m 
function me2(base,exponent,modulus){
    if(modulus==1) return 0;
    let value=1;
    for(var i=0; i<exponent ; i++){
        value=((value%modulus)*(base%modulus))%modulus;
    }
    return value;
}
// O(n)
console.log(me2(91,4,11));