function calcular(){
    var txtv = window.document.querySelector("input#txtvel")
    var res = window.document.querySelector("div#res")
    var vel = Number(txtv.value)
    res.innerHTML = `<p>sua velocidade atual é de <strong>${vel}Km/h.</strong></p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está multado! por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com segurança</p>`
}