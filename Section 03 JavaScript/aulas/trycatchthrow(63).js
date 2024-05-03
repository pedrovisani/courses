// try {
//     console.log(naoExisto);
// } catch(erro) {
//     console.log('naoExisto não existe');
//     console.log(erro);
// }

function soma(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y;
}

try{
console.log(soma('1', 2));
} catch(error) {
    // console.log(error);
    console.log('Algum erro mais amigável');
}