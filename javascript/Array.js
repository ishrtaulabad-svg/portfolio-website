const Num = [1, 2, 3, 4];
// console.log(Num[2]);

// array method
const Num2 = [1, 2, 3, 4];  // 
// Num2.push(4);
// Num2.pop(4)
// Num2.unshift(8)
// Num2.shift()

// console.log(Num2.includes(7));
// console.log(Num2.indexOf(2));
// const newArr = Num2.join();




// console.log(Num2);
// console.log(typeof newArr)

//slice,splice
 const Num3 = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(Num3.splice(3 ,4))
// console.log(Num3.slice(2 ,2))

const Num4 = [1, 2, 3];
const Num5 = [4, 5, 6];

Num2.concat(Num3);
console.log(Num2);

const Numbers = [...Num4, ...Num5]

console.log(Numbers)

const AllNum = [1,2,3,[4,5,6], 9,10,[11,18],15,16]
const AnotherNum = AllNum.flat(Infinity)
console.log(AnotherNum);

console.log(Array.from("Java"))

// print all elemane
const numbers = [1,2,3,4]
numbers.forEach(numbers=>
    console.log(numbers)
)

// largest number
let number = [45,2,50,60]
let largest = Math.max(...number);
console.log(largest)


//sum of all num

let num = [34,5,6,3,4]
let sum = num.reduce((acc, n)=> acc + n, 0);
console.log(sum);


// sort numbers

let NUM = [10,4,3,4,5]
 NUM.sort((a,b)=>a-b);
console.log(NUM)

//even num
let Num0 = [23,4,5,6,78]
const even = Num0.filter(n=>n % 2===0);
console.log(even)



