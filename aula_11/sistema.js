

function calcular(){
    let velocidade = Number(document.getElementById("velocidade").value)
    if (velocidade <= 60){
        window.alert(`MALANDRO! Sua velocidade "${velocidade}"km/h estava acima do permitido! SE FUDEU`)
    } else {
        window.alert(`Passou perto ein. A ${velocidade}km/h até minha vó anda.`)
    } 
    
}