let person = {
    //특수문자 띄어쓰기 가능
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  //함수
  greet: function () {
    alert('Hi there');
  },
  //숫자 0이상가능
  1.5:'hello'
};

//property 추가 ,변경
person.isAdmin = true;
person.age = 31;
console.log(person);

//property 제거
delete person.age;
//가능은하나 undefined를 직접 할당하는건 하지 않는게 좋다.
person.age = undefined;
console.log(person);

console.log(person['first name']);
console.log(person['1.5']);
