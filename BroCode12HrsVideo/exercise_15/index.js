// string slicing = creating a substring 
//                  from a portion of another string 

//                  string.slice(start, end)

/* const fullName = "Paulo Peres"

let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)

console.log(firstName)
console.log(lastName)

console.log(firstChar)
console.log(lastChar) */

const email = "Bro1@gmail.com"

let username = email.slice(0, email.indexOf("@"))
let extention = email.slice(email.indexOf("@") + 1)

console.log(username)
console.log(extention)
