// method chaining = Calling one method after another 
//                   in one continuous line of code

let username = window.prompt("Enter your username")

// ------ NO METHOD CHAINING -----

username = username.trim()
let letter = username.charAt(0)
letter = letter.toUpperCase()

let extraLetter = username.slice(1)
extraLetter = extraLetter.toLowerCase()
username = letter + extraLetter 

// ------ METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

console.log(username)