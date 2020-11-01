

window.onload = function()
{
  var objCep    = document.getElementById("cep");
  var objResultado = document.getElementById("msgCep");

  //Disparado quando o campo de CEP perder o foco.
  objCep.onblur = validaCep;

  //"Limpar"
  objCep.onfocus = limpaInput;

  function validaCep(){
    var oRegExp = new RegExp("^[0-9]{5}-[0-9]{3}$");
    if (oRegExp.test(objCep.value) == true) {
        objCep.style.borderColor = "#008000";
        objResultado.style.color = "#008000";
        objResultado.innerHTML = "Campo preenchido com sucesso!";
    } else {
        objCep.style.borderColor = "#FF0000";
        objResultado.style.color = "#FF0000";
        objResultado.innerHTML = "CEP inválido! Informe novamente!";
    }
}

    function limpaInput(){
        objCep.value = "";
        objCep.style.borderColor = "";
        objCep.style.color = "";
        objResultado.innerHTML = "";
    }
}