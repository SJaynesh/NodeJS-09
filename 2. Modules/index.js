const { add, sub, mul } = require('./module/math');
const h = require('');

console.log(add(10, 20)); // 30
console.log(sub(25, 10)); // 15
console.log(mul(25, 10)); // 250

const students = {
    name: "Ajay",
    age: 20,
    course: "Full Stack"
}

// let name = students.name;
// let age = students.age;
// let course = students.course;

const array = [10, 20, 30, "Hello", 88.36, false];

let { name, age, course } = students;

let [a, b, c, d, e, f] = array;

console.log(name);
console.log(age);
console.log(course);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

