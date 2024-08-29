const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 22,

    fala(){ // método
        console.log(`Minha idade atual é: ${this.idade}.`); // this referencia pessoa1
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/////////////////////////////////////

/* function criaPessoa (nome,sobrenome, idade) {
    return { // ou return {nome, sobrenome, idade}
        nome: nome, // = apenas nome,
        sobrenome: sobrenome, // = apenas sobrenome,
        idade: idade, // = apenas idade,
    };
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);*/

// função dentro de objeto = método
// argumento = valor que é passado para o parâmetro
/*const pessoa = {  //objeto literal 
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 22,
};*/
