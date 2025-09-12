// var isstatus = document.querySelector("h5");
// var btn = document.getElementById("Add");

// var check = 0;
// btn.addEventListener("click", function() {

//     if(check == 0){

//     isstatus.innerHTML = "Friends";
//     isstatus.style.color ="green";

//     btn.innerHTML = "Remove Friend"
// check = 1;     
// }else{
//      isstatus.innerHTML = "Strangers";
//     isstatus.style.color ="red";
//     btn.innerHTML = "Add Friend"
//     check =0;
// }
// });


// // love icon
// var cont = document.querySelector("#container");
// var love = document.querySelector("i");

// cont.addEventListener("dblclick",function(){

// love.style.transform = "translate(-0%, -50%) scale(1)"
// love.style.opacity = 0.8;


// setTimeout(function(){
// love.style.opacity = 0;
// },1000);
// setTimeout(function(){
// love.style.transform ="translate(-0%, -50%) scale(0)"
// },400);
// });


// custom  mcurser

var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor");

main.addEventListener("mouseover",function(dets){
  crsr.style.left = dets.clientX + "px";
      crsr.style.top = dets.clientY + "px";
})