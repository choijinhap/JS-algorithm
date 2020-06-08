//0과 1사이 부동수소점 반환
console.log(Math.random());
console.log(Math.random());

//특정범위의 부동소수점을 얻고싶으면 그냥 연산하면 된다.
console.log(Math.random()*100) //0~100
console.log(Math.random()*20+5) //5~25

//정수를 얻으려면 floor() round() ceil() 활용
console.log(Math.floor(Math.random()*2)) //0 ~ 99 정수
console.log(Math.round(Math.random()*2)) //0 ~ 100 정수
console.log(Math.ceil(Math.random()*2)) //1 ~ 100 정수
