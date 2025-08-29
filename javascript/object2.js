// 🧠 Use a Symbol to create a unique key property in an object.
// This ensures the property won't conflict with others.
const Mysym = Symbol("key1");

// 🧠 Create an object literal representing a student with various properties.
// Properties include strings, numbers, an array, and a symbol key.
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

// 🔸 Access properties of an object using dot notation and bracket notation.
// Display values of 'name', 'Id', and 'LastDay' properties in console.
console.log(student.name);
console.log(student.Id);
console.log(student["LastDay"]);

// 🔸 Modify an existing property value in the object.
// Update the email property and log the new value.
student.email = "0001@gmail";
console.log(student.email);

// 🔸 Show the whole object in the console after modification.
// (Freezing is commented out to allow changes.)
console.log(student);

// 🔸 Add methods (functions) to the object to perform actions.
// Methods greet the coders with and without the student's name.
student.greeting = function () {
  console.log("Hello coders");
};
student.greetingTwo = function () {
  console.log(`Hello coders ${this.name}`); // 'this' refers to the student object
};

// 🔸 Call the methods added to the student object to see their output.
// Greeting messages appear in the console.
student.greeting();
student.greetingTwo();

// 🔹 Create another object representing a person with properties and a method.
// The method logs a greeting including the person's name.
const person = {
  name: "Hamza",
  age: 34,
  greet: function () {
    console.log("Hello coders " + this.name);
  },
};
person.greet();

// 🔹 Access nested object properties within an object.
// Log English and Math marks from a student's marks object.
const student1 = {
  name: "Sara",
  marks: {
    math: 85,
    english: 90,
  },
};
console.log(student1.marks.english);
console.log(student1.marks.math);

// 🔹 Access deeply nested object properties using chained dot notation.
// Log the first name from a nested fullName object.
const regularUser = {
  email: "asd@gmail.com",
  fullName: {
    Userfullname: {
      firstName: "Ali",
      lasName: "Ahmad",
    },
  },
};
console.log(regularUser.fullName.Userfullname.firstName);

// 🔹 Combine two objects into one using the spread operator.
// Creates a new object containing properties from both source objects.
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// 🔹 Extract and log the keys, values, and entries of an object.
// Useful to inspect or iterate over an object's contents.
console.log("Keys:", Object.keys(obj3));
console.log("Values:", Object.values(obj3));
console.log("Entries:", Object.entries(obj3));

// 🔹 Use object destructuring to extract properties into variables.
// Rename a property 'CourseInstructor' to 'Instructor' during destructuring.
const course = {
  name: "Math",
  fee: 999,
  CourseInstructor: "Hetish",
};

const { CourseInstructor: Instructor } = course;
console.log(Instructor);

// 🔹 JSON-style Data (comment: used in APIs)
// Reminder: JSON is like JavaScript objects but keys/strings use double quotes
/*
  {
    "name": "Math",
    "fee": 999
  }
*/

// pratice question
const book = {
  title: "JavaScript 101",
  author: "John Doe",
  pages: 350,
  isPublished: true,

//   use summary object
  summary: function() {
    console.log(`The book ${this.title} by ${this.author} has ${this.pages} pages.`);
  }
};

console.log(book.isPublished)
book.author = "John smith"
console.log(book.author)

book.summary();


// create a Symbol and use it as a hidden property key in an object:

const secretKey = Symbol("secret");

const user= {
    name: "Zain",
    [secretKey]: "hiddenValue",
}

console.log(user[secretKey]);



// Create a nested object employee: Log the city and zip code.
const employee = {
  id: 101,
  personalInfo: {
    name: "Amina",
    address: {
      city: "Lahore",
      zip: 54000,
    }
  }
};
console.log(employee.personalInfo.address.city)
console.log(employee.personalInfo.address.zip);


// Merge these two objects using the spread operator:


const a = { a: 1, b: 2 };
const b = { c: 3, d: 4 }
const merge = {...a,...b}

console.log(merge)


// Destructuring and RenamingUse object destructuring to extract the brand as company and log it.
const laptop = {
  brand: "HP",
  price: 50000,
  model: "Pavilion",
};

const {brand :company}=laptop;
console.log(company)


// Create an object course with:Call the method and log the output.
const Course = {
    name : "javascript",
    duration : "3week",
    instructor : "aaaa",

     details:function(){
return `course: ${this.name},instructor: ${this.instructor}, duration: ${this.duration}`;
    }
}

console.log(Course.details())


// Student Object with Method

const Student = {
    name : "Hamza",
    id : "22A",
    subject : "Math",

    Info: function(){
       return `Student(name: ${this.name}, id: ${this.id}, subject: ${this.subject})`;
    }
}

Student["subject"]="phy",


console.log(Student.Info())
