const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json'); //não coloca barras
const escreve = require('./modules/escrever');
const ler = require('./modules/ler').default;

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Italo' },
    { nome: 'Vitor' },
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
};

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);
