// (x^y)%p 계산하기

function me1(base,exponent,modulus){
    return Math.pow(base,exponent)%modulus;
}
console.log(me1(2,4,3));
console.log(me1(6,123124,123));