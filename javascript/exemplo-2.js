window.onload = function(){
    var botao = document.getElementById("botao");
    var conteudo = document.getElementById("nota");
    var resultado = document.getElementById("resultado");

    botao.onclick = function(){
        var nota = parseFloat(conteudo.value);
        console.log("carai");

        console.log(conteudo.value);
        console.log(resultado);
        if(nota >= 6.0){
            resultado.innerHTML = "aprovado";
        }else{
            resultado.innerHTML = "reprovado";
        }
    }
}