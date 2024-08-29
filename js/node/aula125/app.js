const multiplicacao = require('./mod');

console.log(multiplicacao(2, 2));

console.log(__filename); //arquivo atual - caminho absoluto
console.log(__dirname); //pasta atual - caminho absoluto



//const path = require('path');
//console.log(path.resolve(__dirname, '..', '..')) direciona o caminho correto