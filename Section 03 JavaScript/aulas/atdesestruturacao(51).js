const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome;
// const {nome: t, sobrenome} = pessoa;
// console.log(t);

//const {endereco: {rua, numero}, sobrenome} = pessoa;
//console.log(rua, numero);

//const {endereco: {rua: r = 12345, numero}, sobrenome} = pessoa;
//console.log(rua, numero);

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);

