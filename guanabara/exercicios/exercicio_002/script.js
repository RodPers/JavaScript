function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')

    if(fano.value.lenght == 0 || fano > ano){
        window.alert('data inválida')
    }
}