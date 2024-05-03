const nome = 'Pedro Henrique'
const sobrenome = 'Ferreira Visani'
const idade = 22
const peso = 82
const alturaEmM = 1.85
let indiceMassaCorporal = peso / (alturaEmM ** 2)  
let anoNascimento = 2024 - idade


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); // maneira moderna
console.log(nome, 'nasceu em', anoNascimento, '.');


