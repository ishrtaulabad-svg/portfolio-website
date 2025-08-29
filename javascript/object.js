// Use an object when you want to store different properties about one item.

// Use an array when you want to store multiple items in a list.



// object literals
const Mysym = Symbol("key1");

const student = {
  name: "Ali",
  Id: 12,
  [Mysym]: "key1",
  Class: 10,
  City: "Rawalpindi",
  email: "21@gmail",
  Age: 16,
  LastDay: ["monday", "friday"],
};
console.log(student.name);
console.log(student.Id);

console.log(student["LastDay"]);

// change values
student.email = "0001@gmail";
console.log(student.email);

// freeze obj
// Object.freeze(student)
// student.Age = 12;
// console.log(student.Age)

// no age change due to above freeze
console.log(student);

// greeting
student.greeting = function () {
  console.log("Hello coders");
};
console.log(student.greeting());

student.greetingTwo = function () {
  // string inter potation(` `)
  console.log(`Hello coders ${this.name}`);
};
console.log(student.greetingTwo());

// Create a method inside an object:
const person = {
    name : "Hamza",
    age  : 34,
    greet: function(){
        console.log("Hello coders" + this.name);
    }
}

person.greet()


// Access Nested Object Property
const student1 = {
  name: "Sara",
  marks: {
    math: 85,
    english: 90
  }
};

console.log(student1.marks.english); 
console.log(student1.marks.math); 


const regularUser = {
email : "asd@gmail.com",
fullName : {
  Userfullname :{
    firstName : "ali",
    lasName : "Ahmad"
  }
}
}

console.log(regularUser.fullName.Userfullname.firstName)


// combine two object
obj1 = {
  1 : "a",
  2 : "b",
  3 : "c",
}
obj2 = {
  4 : "d",
  5 : "e",
  6 : "f",
}

// const obj3 = Object.assign({},obj1, obj2)  first method
const obj3 = {...obj1,...obj2}
console.log(obj3);


// key and vlaues
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(Object.keys(obj3));


// de-structure 

const course = {
  name : "math",
  fee : 999,
CourseInstructor : "hetish",
}

// course.CourseInstructor
//when print values diff time
const {CourseInstructor : Instructor} = course
console.log(Instructor)



// JSON API

// {
//   name : "math",
//   fee : 999,
// }