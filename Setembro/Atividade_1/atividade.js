const pId = document.querySelector("#pId");
let total = Number(prompt("Qual o valor total da compra?"));
if (total == 0 || total < 20) {
  pId.innerHTML += `<h2>O valor não pode ser parcelado!</h2>`;
  pId.innerHTML += `<h3>Valor total a ser pago: R$${total}</h3>`;
} else if (total >= 20) {
  pId.innerHTML = "<h1>Possíveis parcelas:</h1> <br>";
  for (let num = 1; num <= 6; num++) {
    let parc = Math.floor(total / num);
    if (parc >= 20) {
      pId.innerHTML += `<h3> ${num}X de R$${parc}. </h3> <br>`;
    }
  }
}