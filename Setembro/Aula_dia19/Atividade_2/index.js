const form = document.querySelector("form");
const addClub = document.querySelector("#clube");

const btnList = document.querySelector("#btnList");
const btnTab = document.querySelector("#btnTab");

const resp1 = document.querySelector("#clubes");
const resp2 = document.querySelector("#tabela");

const clubes = [];

const adicionar = () => {
  const clube = addClub.value.trim();
  if (clube !== "") {
    clubes.push(clube);
    addClub.value = "";
  };
};

const listar = () => {
  resp1.innerHTML = "";
  resp1.innerHTML += "<h3> Clubes Participantes: </h3> <ul>";

  for (let i = 0; i < clubes.length; i++) {
    resp1.innerHTML += `<li> ${clubes[i]} </li>`;
  };
  resp1.innerHTML += "</ul>";
};

const tabela = () => {
  resp2.innerHTML = "";
  if (clubes.length % 2 !== 0) {
    resp2.innerHTML =
      "<p> Não é possível montar a tabela. Número de clubes ímpar. </p>";
    return;
  } else {
    resp2.innerHTML += "<h3> Tabela de Jogos: </h3> <ul>";

    for (let i = 0; i < clubes.length / 2; i++) {
      const pClub = clubes[i];
      const uClub = clubes[clubes.length - 1 - i];

      resp2.innerHTML += `<li> ${pClub} x ${uClub} </li>`;
    };
    resp2.innerHTML += "</ul>";
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  adicionar();
});

btnList.addEventListener("click", () => {
  listar();
});

btnTab.addEventListener("click", () => {
  tabela();
});