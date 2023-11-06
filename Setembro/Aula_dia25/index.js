const form = document.querySelector('form');
const resp = document.querySelector('span');

let fruta = form.inFruta.value.toUpperCase();

const primeriaLetra = () => {   
    let letra1 = fruta[0];
    return letra1;
};

const comprimento = () => {
    let fruta = form.inFruta.value;
    let compr = fruta.length;
    return compr;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resp.innerHTML = '';

    let letra1 = primeriaLetra();
    let compr = comprimento();
    
    for (let i = 0; i < compr; i++) {
        if (letra1 === fruta[i]) {
            resp.innerHTML += `${letra1}`;
        } else {
            resp.innerHTML += '_';
        };
    };
    form.inFruta.value = '';
    form.inFruta.focus();
});