//문자열 접근
console.log("dog".charAt(0));
console.log("dog".substring(1,3));


//문자열 비교 , 뒤의 알파벳이 더 큰거임

console.log("a"<"b");
//길이가 다르면 짧은 문자열 까지 비교한다.
console.log("abb"<"d");

//문자열 검색
console.log("dragon".indexOf("ra"));
console.log("dragon".indexOf("ra",2));

console.log("dragon".startsWith("dr"));
console.log("dragon".endsWith("gon"));

//문자열 분해
let text="a,b,c,d,e,f,g";
console.log(text.split(","));

//문자열 바꾸기
console.log(text.replace("b,c","c,b"));