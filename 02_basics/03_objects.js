// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "shekhar",
    "full name": "Shekhar Bhushan",
    [mySym]: "myKey1",  // using symbol in object
    age: 22,
    location: "Haldia",
    email: "shekhar@123.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
// => shekhar@123.com
//console.log(JsUser["email"]);
// => shekhar@123.com

//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);


JsUser.email = "shekhar@456.com"
//Object.freeze(JsUser)
JsUser.email = "shekhar@789.com"
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

