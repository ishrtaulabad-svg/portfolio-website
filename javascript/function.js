console.log("hi")

        function addTwoNum(a,b){
            console.log(a+b);
        }
        addTwoNum(3,5);   
         
// calculate area

function calculateArea(length , width){
console.log(length*width)
}
calculateArea(12,3)

//largest number
function largestNum(Num1,Num2){
    if(Num1>Num2){
        console.log(Num1)
    }else{
        console.log(Num2)
    }
}
largestNum(12,34)
//object pass
const user={
    name:"Ali",
    id:2332,
}

function handelObj(anyobj){
    console.log(`name is name ${anyobj.name} and id is ${anyobj.id}
    `);
}
handelObj({
     name:"Ali",
    id:2332
})

//array pass
const array = [12,344,44,98]
function newArray(getArray){
return array[2]
}
console.log(newArray(newArray))


function person(fname){
    this.firstname = fname;
}
console.log(person)


