const form = document.querySelector('form');

const btU = document.querySelector('#btU');
const btA = document.querySelector('#btA');

const resp1 = document.querySelector('h3');
const pre = document.querySelector('pre');

const span = document.querySelector('span');

let pacientes = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    pre.innerHTML = "";
    let pessoa = form.pac.value;
    pacientes.push(pessoa);
    let ind = 0;
    for (let p = 1; p <= pacientes.length; p++) {
        pre.innerHTML += `<h3> ${p}. ${pacientes[ind]} </h3>`
        ind++
    };
    form.pac.value = ''
    form.pac.focus()
});

btU.addEventListener('click', (event) => {
  event.preventDefault();
  pre.innerHTML = ''
  let pessoa = form.pac.value;
  pacientes.unshift(pessoa);
  let ind = 0;
  for (let p = 1; p <= pacientes.length; p++) {
    pre.innerHTML += `<h3> ${p}. ${pacientes[ind]} </h3>`;
    ind++;
  }
  form.pac.value = "";
  form.pac.focus();
});

btA.addEventListener('click', (event) => {
  event.preventDefault();
  pre.innerHTML = ''
  let pessoa = form.pac.value;
  let atend = pacientes.shift(pessoa);
  let ind = 0;
  for (let p = 1; p <= pacientes.length; p++) {
    pre.innerHTML += `<h3> ${p}. ${pacientes[ind]} </h3>`;
    ind++;
  }
  span.innerHTML = `${atend}`;
  form.pac.value = "";
  form.pac.focus();
});