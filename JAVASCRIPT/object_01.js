const mySym = Symbol("key1")


const jsUsers = {
    name:"Sushree",
    "full name" : "Sushree Swagtaika",
    [mySym] : "Key1",
    age : 22,
    location :"Jajpur",
    email:"sushree@google.com",
    isLoggedin:false

}

console.log(jsUsers.email)
console.log(jsUsers["email"])
console.log(jsUsers["full name"])
console.log(jsUsers[mySym])

//to override a value in a object 

jsUsers.email = "sushree@kfintech.com"
console.log(jsUsers.email)

//if we want to lock a object thst means we can chanfe any value then we use  frezze

// Object.freeze(jsUsers)

jsUsers.email = "sushree@microsoft.com"
console.log(jsUsers)

jsUsers.greeting= function(){
    console.log("Hello JS user")
}

jsUsers.greetingTwo= function(){
    console.log(`Heloo js user, ${this["full name"]}`)
}


console.log(jsUsers.greeting)
console.log(jsUsers.greeting())
console.log(jsUsers.greetingTwo())