"use strict"

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

//  one.addEventListener("click", changeOne('Text'));

// function changeOne (text){
//     one.innerHTML = text;
// } 

// two.addEventListener("click", changeTwo);

// function changeTwo (){
//     two.innerHTML = "Whatt";
// }

// three.addEventListener("click", changeThree);

// function changeThree (){
//     three.innerHTML = "Look";
// } 

one.onclick = function (){
    one.innerHTML = "How";
}

two.onclick = function(){
    two.innerHTML = "Whatt";
}

three.onclick = function(){
    three.innerHTML = "Look";
}