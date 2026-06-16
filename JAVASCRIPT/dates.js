let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

let myCreatedDate = new Date(2026,0,7,5,4)
//console.log(myCreatedDate.toLocaleString())

let myCreatedDate1 = new Date("2026-01-23")
let myCreatedDate2 = new Date("08-07-2003")

console.log(myCreatedDate1.toLocaleString())
console.log(myCreatedDate2.toLocaleString())


let myTimestamp = Date.now()

console.log(myTimestamp) //miliseconds


let newDate = new Date()

console.log(newDate.getDay())
console.log(newDate.getHours())


console.log(newDate.toLocaleString('Default', {
    day :"2-digit"
}))