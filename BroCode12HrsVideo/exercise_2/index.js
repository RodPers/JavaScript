// variable  = A container that stores a value.
//              Behaves as if were the value it contains

let fullName = "Rod Pers"
let age = 25
let isStudent = false

document.getElementById("p1").textContent = `Your name is ${fullName}`
document.getElementById("p2").textContent = `You are ${age} years old`
document.getElementById("p3").textContent = `Are you in the school? ${isStudent}`