const myArr = [1,2,3,4,5]

// console.log(myArr[0])

const myHeros = ["jagannath","Jagan"]
// console.log(myHeros[1])

// Array Methods++++++++++++++++++++++++++++++++





// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

//  myArr.pop()
//  console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)


// console.log(myArr.includes(9))
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(4))


const newArr = myArr.join() //converts the array into string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr))


// +++++++++=SLICE/SPLICE++++++++++++++++++/

console.log("A" , myArr)

const myArr2 = myArr.slice(1,3)
console.log(myArr2)

console.log("B" , myArr)

const myArr3 = myArr.splice(1,3) //manipulates the org arr

//splice(start, count)
// Starts at index 1.
// Removes 3 elements.
// Modifies the original array.

console.log(myArr)
console.log(myArr3)