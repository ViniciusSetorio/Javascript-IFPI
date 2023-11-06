const form = document.querySelector('form');
const pre = document.querySelector('pre');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    pre.innerHTML = ''

    let anos = Number(form.nAno.value);
    let chin = Number(form.nChi.value);

    let cont = 1;
    while (cont <= anos) {
        if (cont == 1) {
            pre.innerHTML += `<h3> ${cont}° Ano: ${chin} Chinchilas </h3>`;
            cont++
            continue    
        } else {
          chin = chin * 3;
          pre.innerHTML += `<h3> ${cont}° Ano: ${chin} Chinchilas </h3>`;
        };
        cont++;
    };
});