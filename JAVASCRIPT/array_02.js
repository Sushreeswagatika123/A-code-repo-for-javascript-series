const marvel_heros = ["Thor","Iron man","Halk"]
const dc_heros = ["flash","spider man","super man"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// console.log(marvel_heros.concat(dc_heros))

//spread operator
//it spreads the elements of an array
const allHeros = [...marvel_heros,...dc_heros]
// console.log(allHeros)


const another_array = [1,2,3,[5,6,7],4,5,[8,9,0,[3,6,5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)


console.log(Array.isArray("Sushree"))
console.log(Array.from("Hitesh"))

const score1 = 100
const score2 = 200
const score3 = 300

//we want to convert them into a single string

console.log(Array.of(score1,score2,score3))