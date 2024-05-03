const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; // let textoCriado = document.createTextNode(texto);
    
    // tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div)

// topo do DOM = document








// const p = document.querySelector('.container p');
// p.innerHTML = 'Frase 1'
// const div = document.querySelector('.container div');
// div.innerHTML = 'Frase 2'
// const footer = document.querySelector('.container footer');
// footer.innerHTML = 'Frase 3'
// const section = document.querySelector('.container section');
// section.innerHTML = 'Frase 4'