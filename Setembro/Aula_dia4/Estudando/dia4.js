// ESTUDANDO...

const formulario = document.querySelector('form');
const resp = document.querySelector('h3');

formulario.addEventListener('submit', (e) => {
    const nome = formulario.inNome.value;
    resp.innerHTML = `Olá ${nome}`;
    e.preventDefault();
});