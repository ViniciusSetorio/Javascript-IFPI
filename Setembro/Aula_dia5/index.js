const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let n1 = form.inNota1.value;
  let n2 = form.inNota2.value;
  let média = (Number(n1) + Number(n2)) / 2;
  resp1.innerHTML = `Olá, ${form.inNome.value}! Sua média é: ${média}.`;
  if (média >= 7.0) {
    resp2.innerHTML = "Você foi aprovado. :)";
    resp2.style.color = "green";
  } else {
    resp2.innerHTML = "Você foi reprovado. :(";
    resp2.style.color = "red";
  }
});