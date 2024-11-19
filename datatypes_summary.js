// # Primitive Data types


// 7 types : String, Number,Boolean, null,undefined ,Symbol, bigInt 
// const Score =100
// const ScoreValue =100.3
// const isLoggedIn = false
// const outsideTemp =null
// let userEmail;

// const id = Symbol('123')
// const anotherID = Symbol('123')
// const bigNumber = 6355555558765865785756575566n 

// console.log(id === anotherID);


// Refrence type (Non premitive) data types

// Array, Objects ,Functions, 

const heros = ["Akbar","waqas","shahzad"];
let myObj={
    name:"waqas",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof heros);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive) , Heap (Non-primitive)

let myYoutubename = "WaqasMalik.com"

let anothername = myYoutubename

anothername = "myYoutubenameiswaqas"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email ="waqas@google.com"

console.log(userOne.email);
console.log(userTwo.email);




