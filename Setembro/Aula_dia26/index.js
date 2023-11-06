const form = document.querySelector('form');
const resp = document.querySelector('span');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cracha = form.nomeP.value;
    const nome = cracha.split(' ');
    const nomeCracha = `${nome[0]} ${nome[nome.length - 1]}`;
    resp.innerHTML = `${nomeCracha}`
});