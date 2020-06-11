let array1=['a','b','c'];

//삽입 O(1)
array1.push('d');
console.log(array1);

//제일 마지막 원소 삭제 O(1)
array1.pop(); //return 4
console.log(array1);

//첫번째 원소 삭제 O(1)
array1.shift();//return 1
console.log(array1);

//접근 O(1)
console.log(array1[0]);
for(let i=0; i<array1.length; i++){
    console.log(i,array1[i]);
}
//in 으로 쓰면 index가 나온다
for(let index in array1){
    console.log(index);
}
//of로쓰면 배열의 원소가 나온다.
for(let element of array1){
    console.log(element);
}
//foreach는  중간에 break같은거 못하고 무조건 배열을 다돈다.
array1.forEach(function(element,index){
    console.log(element);
    console.log(index);
});

array1.forEach(function(i){console.log("1"+i);})

//slice함수 배열의 시작인덱스와 끝인덱스를 인자로받아 복사한다.
let array2=array1.slice(1,2);

array2=array1;
//이런 식으로 얕은 복사를 하면 array2를 바꿔도 array1값이 바뀐다

Array.from(array1);
//이건 깊은 복사

//완전 깊지는 않음. 결국 내부 배열은 참조해서 쓰기 떄문에.
let test1=[1,2,3,[4,5]];
test2=Array.from(test1);
console.log(test2[3]);
test2[3][1]=1;
console.log(test1[3]);