const nome = ['Luiz', 'Otávio', 'Henrique'];

// for (let valor of nome) { acessa valor, não índice
//     console.log(valor);
// }

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)