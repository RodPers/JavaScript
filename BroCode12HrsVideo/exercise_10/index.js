// IF STATEMENTS => 'if' is a condition in JS that if = True, execute some code
//                                                 if != True, execute something else
const myText = document.getElementById('myText')
const mySubmit = document.getElementById('mySubmit')
const resultElement = document.getElementById('resultElement')
let age

mySubmit.onclick = function(){

    age = myText.value
    age = Number(age)

    if(age > 17){
        resultElement.textContent = 'You are old enough to enter this site'
    } else if(age < 0){
        resultElement.textContent ='your age cant be below 0'
    } else {
        resultElement.textContent ='You must be 18+ to enter this site'
    }
}