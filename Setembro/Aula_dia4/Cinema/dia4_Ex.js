// EXERCÍCIO - CINEMA
const titulo = document.querySelector("#tit");
const duração = document.querySelector("#dur");
const resp = document.querySelector("h3");
const botão = document.querySelector("#but");
botão.addEventListener("click", () => {
  resp.innerHTML = `Título :${titulo.value}. <br> Duração:${Math.floor(
    duração.value / 60
  )} Hora(s) e ${duração.value % 60} minutos.`;
});
