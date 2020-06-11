//함수형 메소드
//map
//매개변수로 전달된 함수 변환을 모든 항목에 적용한 다음 변환이 적용된 항목들을 포함하는 신규배열을 반환한다.
let a=[1,2,3,[1,2],"a"].map(function(val){
    return val*3;
});
console.log(a);

//filter
//배열 내 항목들 중 함수의 매개변수로 전달된 조건을 충족시키는 배열들만 반환한다. 원래 배열을 변경하지 않는다.
let b=[1,2,3,4,5,6,7].filter(function(val){
    return true;
});
console.log(b);

//reduce
//매개변수로 전달된 변호나 함수를 사용해 배열의 모든 항목을 하나의 값으로 결합한다.
let c=[1,2,3,4].reduce(function(preval,curval,index,array){
    return a+b;
});
console.log(c);