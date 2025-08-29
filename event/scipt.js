document.getElementById('button').addEventListener('click',function(){
    alert("clicked me");
})

// event object
document.getElementsByClassName('button').addEventListener('click',function(e){
    alert("double clicked")
})
console.log(e)