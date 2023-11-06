const form = document.querySelector('form');
const resp = document.querySelector('span');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resp.innerHTML = '';

    const funcionario = form.inFun.value.toLowerCase();
    const arrayFuncionario = funcionario.split(' ');
    
    for (let i = 0; i < arrayFuncionario.length - 1; i++) {
        let nome = arrayFuncionario[i];
        let letreNome = nome.charAt(0);
        resp.innerHTML += `${letreNome}`
    }
    resp.innerHTML += `${arrayFuncionario[arrayFuncionario.length - 1]}@empresa.com.br`;

    form.inFun.value = '';
    form.inFun.focus();
});