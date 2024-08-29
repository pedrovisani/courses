/*
Falsy values

false
'' "" ``
null/undefined
NaN

console,log('Luiz' && undefined && 'Maria');
-> se tudo for verdadeiro, retorna o último valor
-> se houver item falso, vai retorná-lo

console.log(0 || false || null || 'Luiz Otávio' || true);
retornará o primeiro valor verdadeiro que encontrar = Luiz Otávio

ex:

const corUsuario = 'vermelho' / null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

-> retorna a cor que o usuário digitou ou null


*/