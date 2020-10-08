function Person() {
  this.age = 30;
  this.nmae = 'Max';
  this.greet = function () {
    console.log('hi!');
  };
}

const person = new Person();
person.greet();
