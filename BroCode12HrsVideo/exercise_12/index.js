// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse

//let age = 16
//let message = age > 17 ? "you're an adult" : "you're a minor"
//console.log(message)

//let time = 12
//let greeting = time < 12 ? "Good morning!" : "Good Afternoon!"

//console.log(greeting)

//let isStudent = false
//let message = isStudent ? "You are a student" : "You are not a student"

//console.log(message)

let purchaseAmount = 99
let discount = purchaseAmount > 99 ? 10 : 0

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`) 