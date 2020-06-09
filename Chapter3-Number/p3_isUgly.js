//number를 divisor로 계속나눈 나머지 리턴
function maxDivide(number , divisor){
    while(number%divisor==0){
        number=number/divisor;
    }
    return number;
}

//소인수가 2,3,5 뿐인지 확인하는 함수
function isUgly(number){
    let result=0;
    result=maxDivide(number,2);
    result=maxDivide(result,3);
    result=maxDivide(result,5);
    return result===1?true:false;
}

console.log(isUgly(7));