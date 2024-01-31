// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
}
)();

// unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('shekhar')