// switch = can be efficient replacement to many else if statements 

let testScore = 56
let letterGrade 

switch(true){
    case testScore > 89 : 
        letterGrade = "A"
        break
    case testScore > 79 : 
        letterGrade = "B"
        break
    case testScore > 69 : 
        letterGrade = "C"
        break
    case testScore > 59 : 
        letterGrade = "D"
        break
    case testScore > 49 : 
        letterGrade = "E"
        break
    default :
        letterGrade = "F"
}


console.log(letterGrade)