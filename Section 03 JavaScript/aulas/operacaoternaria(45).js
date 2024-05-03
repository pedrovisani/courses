// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
