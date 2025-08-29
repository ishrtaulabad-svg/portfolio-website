const user = {
    username : "hetish",
    price : 1200,

    welcomeMessage : function(){ 
        console.log(`${this.username},Wellcome to website`);

        console.log(this)
        }
}

// user.welcomeMessage()

// value change, context

// user.username  = "saam",
// user.welcomeMessage()

// node envir (this) show empty
console.log(this)



// function chai(){
//     let username = "Abid"
//     console.log(this.username)
// }
// chai()



// arrow function

const chai = () => {
    let username = "Abid"
    console.log(this)
}
// chai()

// basic arrow fun

// const AddTwo = (num1, num2) => {
//     return num1 + num2
// }

// implesit return
// const AddTwo = (num1, num2) => num1 + num2
// or
// const AddTwo = (num1, num2) => (num1 + num2)

// when obj return
const AddTwo = (num1, num2) => ({username:"hetish"})


console.log(AddTwo(4,6))
