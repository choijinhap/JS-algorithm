// 변수 선언

//var 함수 범위
function scope1(){
    var top = "top";
    bottom="bottomss";
    console.log(bottom);

    var bottom;
}
scope1();

//호이스팅때문에 함수 제일 위에서 선언한것과 같음
//let은 블록범위 이다. 아래에선 let으로 하면 not defined 에러뜸
function scope2(print){
    if(print){
        var insideIF=12;
        //let insideIF=12;
    }
    console.log(insideIF);
}
scope2(true);

//변수형 7개 기본자료형
//boolean , number ,string ,undefined , object , function , symbol
//선언만 되고 값이 할당되지 않으면 undefined가 할당된다.

//자바스크립트에서 false => false , 0 , '' , "" , NaN , undefined , null


//비교연산자 === , ==
//==는 값만 확인하고 ===는 타입까지 확인한다.
if("5"==5){
    console.log(" '5'==5 ");
}
if("5"===5){
    console.log(" '5'===5 ");
}

var ob1 = {};
var ob2= {};
console.log(ob1 == ob2);
console.log(ob1 === ob2);
