import validator from "./validator.js";

function validacao(e) {
  e.preventDefault();

  const numCard = document.getElementById("cartao");
  const aviso = document.getElementById("mensagem");

  const digito = numCard.value;
  
  if (digito.trim() === "" || digito.length <= 4) {
    aviso.innerHTML = "digito";

  }

  const validar = validator.isValid(digito);
  const mascara = validator.maskify(digito);
  numCard.value = mascara;
  
  if (validar) {
    aviso.innerHTML = `Seu cartão está válido! ${validator.maskify(digito)}`;
  } else {  
    aviso.innerHTML = `Cartão inválido! Tente novamente. ${validator.maskify(digito)}`;
  }  
}

const button = document.getElementById("botao");
button.addEventListener("click", validacao);

  

