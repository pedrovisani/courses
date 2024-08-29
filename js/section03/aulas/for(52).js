// console.log('Linha 0');
// console.log('Linha 0');
// console.log('Linha 0');
// console.log('Linha 0');
// console.log('Linha 0');
// i - index

for(let i = 0 /*não é redeclarado*/ ; i <= 5; i++ /*ou i += x / i -= x*/)  {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par)
    // para percorrer um array ex: console.log(`Indice ${i}`, frutas[i])
    // console.log(`Linha ${i}`);
}