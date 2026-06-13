const name = "Sushree"
const repoCount = 50

console.log(name + repoCount +"value")

//more reliable

//console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("swagatika")

// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('g'))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-8,4)
// console.log(anotherString)

const newString1 = "    Swagatika    "
// console.log(newString1)
// console.log(newString1.trim())

const url = "https://sushree.com/sushree%20swagtaika"

console.log(url.replace('%20','-'))
console.log(url.includes("sushree")) // the string is present or not
console.log(url.includes("jagan"))