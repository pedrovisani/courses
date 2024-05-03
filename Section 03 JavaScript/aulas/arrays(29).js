const alunos = ['Luiz', 'Pedro', 'Laura'] ;
alunos[0] = 'Eduardo'; // adiciona ou altera elemento
alunos.push('Otávio'); // adciona ao final
alunos.unshift('Rosa'); // adciona ao começo

// alunos.pop(); remove elemento do final; mais utilizado

// const removido = alunos.pop(); retorna elemento removido

// alunos.shift(); remove elemento do começo

// delete aluno[1]; remove elemento sem alterar indice

// console.log(alunos.slice(0, 3 ou negativo)); retirar um intervalo de elementos


console.log(alunos);


// lista; separar por tipo de dado (boa prática de programação)
// também são indexadas - por elementos
// array = object
// console.log(alunos instanceof Array); verfiica se realmente é um array; true or false