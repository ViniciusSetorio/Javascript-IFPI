const form = document.querySelector("form");
const erro = document.querySelector("#err");
const chance = document.querySelector("#chan");
const dicas = document.querySelector("#dica");

const sorteado = Math.floor(Math.random() * 100);
alert(sorteado);
listaErro = [];
let tentativas = 6;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let num = form.inNum.value;

  if (num == sorteado) {
    alert(`Parabéns!!! O número ${num} era o correto.`);
  } else if (num != sorteado) {
    if (listaErro.length < 6) {
        if (listaErro.includes(num) == true) {
            alert('Número repetido! Tente outro.')
        } else {
            tentativas--;
            listaErro.push(num);
            erro.innerHTML = listaErro;
            chance.innerHTML = tentativas;
        }

    } else if (tentativas == 0) {
        alert('Você perdeu :(');
        listaErro.length = 0;
        chance.innerHTML = '';
        erro.innerHTML = '';
    };
  };
  form.inNum.value = '';
  form.inNum.focus();
});