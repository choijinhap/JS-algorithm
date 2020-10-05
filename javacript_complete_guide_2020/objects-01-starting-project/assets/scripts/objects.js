let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there');
  },
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
