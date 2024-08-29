// IEEE 754-2008 = padrão JavaScript para casas decimais

let num = 0.7
let num0 = 0.1

num += num0;
num += num0;
num += num0;

num = parseFloat(num.toFixed(2)); // para evitar confusões com casas decimais (parseFloat or Number)
console.log(num);

///////////////////////////////

let num1 = 1800
let num2 = 2.3
let conta0 = num1 + num2

console.log(num1.toString() + num2); // altera para string apenas nessa linha
console.log(num1.toString(2)); // para ver representação binária
console.log(num1.toFixed(2)); // para arrendondar
console.log(Number.isInteger(num1)); // para saber se um número é inteiro (true or false)
console.log(Number.isNaN(num1)); // para saber se a conta é inválida ou não (NaN)