const num0 = Number(prompt('Digite um número'));
const numTit = document.getElementById('num');
const texto0 = document.getElementById('texto');


num.innerHTML += `<p><strong>Seu número é ${num0}</strong></p> <br/>`;

texto.innerHTML = '';
texto.innerHTML += `Raiz quadrada: ${num0 ** (1/2)} <br/>`;
texto.innerHTML += `${num0} é inteiro: ${Number.isInteger(num0)} <br/>`;
texto.innerHTML += `É NaN: ${Number.isNaN(num0)} <br/>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(num0)} <br/>`;
texto.innerHTML += `Arredondando para baixo: ${Math.ceil(num0)} <br/>`;
texto.innerHTML += `Com duas casas decimais: ${num0.toFixed(2)} <br/>`;