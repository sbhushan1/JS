// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5)
// addTwoNumbers(3, "5")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

    function addTwoNumbers(number1, number2){
    //    let result = number1 + number2
    //    return result
    return number1 + number2
    }
const result = addTwoNumbers(3,5)
//console.log("Result: ", result);

function loginUserMessage(username = "sam") {  //default value
    if (!username) {
        console.log(("Please enter a username"));
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shekhar"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
