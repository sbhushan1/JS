 let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toLocaleDateString());
//  console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 21)
// console.log(myCreatedDate.toDateString());
// Sun Jan 21 2024

// console.log(myCreatedDate.toLocaleString());
// 1/21/2024, 12:00:00 AM  

let myCreatedDate = new Date("01-21-2024")
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);