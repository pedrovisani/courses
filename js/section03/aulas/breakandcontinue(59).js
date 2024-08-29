const numeros = [1, 2, 3, 4, 5, 6, 7];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o  número 2');
        continue;           // pula para a próxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}