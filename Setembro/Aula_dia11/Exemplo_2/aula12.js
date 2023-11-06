const form = document.querySelector("form");
const pre = document.querySelector("pre");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pre.innerHTML = '';
  let número = Number(form.idNumero.value);
  for (let val = 0; val <= 10; val++) {
    pre.innerHTML += `<h3> ${número} x ${val} = ${número * val} </h3>`;
  }
});