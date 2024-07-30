// .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const PayPalBtn = document.getElementById("PayPalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = 'You are subscribed!'
        if(visaBtn.checked){
            paymentResult.textContent = "You are paying with Visa"
        } else if(masterCardBtn.checked){
            paymentResult.textContent = "You are paying with MasterCard"
        } else if(PayPalBtn.checked){
            paymentResult.textContent = "You are paying with PayPal"
        } else {
            paymentResult.textContent = 'Select a form of payment'
        }
    } else {
            subResult.textContent = 'You are not subscribed! Do it first!'
    }

    
}

