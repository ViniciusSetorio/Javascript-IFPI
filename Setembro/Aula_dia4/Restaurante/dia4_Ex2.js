// EXERCÍCIO - RESTAURANTE
const Buffet = document.querySelector("#buf");
const Consumo = document.querySelector("#con");
const botão = document.querySelector("#cal");
const resp = document.querySelector("h3");
botão.addEventListener("click", () => {
  resp.innerHTML = `Valor a pagar R$: ${
    (Buffet.value * (Consumo.value / 1000)).toFixed(2)
  }.`;
});
