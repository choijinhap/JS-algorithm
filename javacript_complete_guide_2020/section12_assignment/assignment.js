class Course {
  set #_price(value) {
    if (value < 0) {
      return;
    }
    this.price = value;
  }
  get #_price() {
    return '$' + this.price;
  }
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#_price = price;
  }

  pricePerLength() {
    return this.length / this.price;
  }
  courseSummary() {
    console.log(
      `This course is ${this.title} , length is ${this.length} and ${
        this.#_price
      }`
    );
  }
}

const courseA = new Course('a', 123, 2000);
const courseB = new Course('a', 10, 150);
console.log(courseA);
console.log(courseB);
console.log(courseA.pricePerLength());
courseA.courseSummary();

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExcersises) {
    super(title, length, price);
    this.numOfExcersises = numOfExcersises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log('TheoriticalClass publish');
  }
}

const practicalCourse = new PracticalCourse('p', 100, 2000, 5);
console.log(practicalCourse);
const theoreticalCourse = new TheoreticalCourse('t', 20, 100);
theoreticalCourse.publish();
