const veículo = document.querySelector("#vei");
const preço = document.querySelector("#pre");
const botão = document.querySelector("#pro");
const resp = document.querySelector("h3");

botão.addEventListener("click", () => {
  resp.innerHTML = `Promoção:${veículo.value}.<br><br>Preço R$:${
    (preço.value / 2).toFixed(2)
  }.<br><br>+12x de R$${(preço.value / 2 / 12).toFixed(2)}.`;
});
