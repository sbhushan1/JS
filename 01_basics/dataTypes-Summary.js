// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Shekhar",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);