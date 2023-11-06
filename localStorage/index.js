// 1 - inserir dado
localStorage.setItem('name', 'Vinícius');

// 2 - restart sem perder dados

// 3 - resgatar item
const name = localStorage.getItem('name');
console.log(name);

// 4 - resgate de itens que não existem
const lastName = localStorage.getItem('Name');
console.log(lastName);

if (!lastName) {
    console.log('Sem sobrenome.');
}

// 5 - remover item
localStorage.removeItem('name');

// 6 - limpar todos os itens
localStorage.setItem('a', 1);
localStorage.setItem('b', 2);

// console.log(typeof localStorage.getItem('a'));

localStorage.clear();

// 7 - session storage
sessionStorage.setItem('number', 123);

// 8 - reiniciar e perder dados

// 9 - salvar objeto
const person = {
    name: 'Vinícius',
    age: 18,
    job: 'programmer',
};

localStorage.setItem('person', JSON.stringify(person)); // converte 'person' para JSON

const getPerson = localStorage.getItem('person');
console.log(getPerson);

const personObj = JSON.parse(getPerson); // converte 'getPerson' para Obj JSON
console.log(typeof personObj);

console.log(personObj.job);

localStorage.clear();