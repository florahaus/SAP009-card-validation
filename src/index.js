import validator from "./validator.js";
function validacao (e){
  e.preventDefault();

  const numCard = document.getElementById ("cartao")
  
  const aviso = document.getElementById ("mensagem")

  const  digito = numCard.value;
  const validar = validator.isValid(digito);
  const mascara = validator.maskify(digito);
  numCard.value = mascara
  
  if (
    digito.trim() === "" ||    
      digito === "0000000000000000" ||
      digito === "000000000000000" ||
      digito === "00000000000000" ||
      digito.length <= 13
  ) {
    return (aviso.innerHTML = "Insira o número para validar");
  }  
  else if (validar === true) {
    return (aviso.innerHTML = `"Seu cartão está válido!" ${validator.maskify(digito)}`);
  }
  else if (!validar) {  
    return (aviso.innerHTML = `"Cartão inválido! Tente novamente." ${validator.maskify(digito)}`);
  }   
}
const button = document.getElementById   ("botao")
button.addEventListener("click",validacao);

  

