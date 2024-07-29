//How to accept user input

//1.  Easy way = window prompt

/*
let username = window.prompt(`Whats your username?`)

console.log(username)
*/

//2.  Professional way = HTML textbox

let username

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value 
    document.getElementById("myH1").textContent = `Hello ${username}!`
}