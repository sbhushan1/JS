const marvel_heros = ["thor", "IronMan", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
// => [ 'thor', 'IronMan', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);
// => [ 'thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]

// spread
//const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);
// => [ 'thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
//  => [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//     ]

console.log(Array.isArray("Shekhar"));
console.log(Array.from("Shekhar"));
console.log(Array.from({name: "Shekhar"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));