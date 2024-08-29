// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     // executada quando não há erros
//     /*try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');        
//     } finally {
//         console.log('Também sou finally');
//     } */
// } catch (e) {
//     console.log('Tratando o erro');
//     // executada quando há erro
// } finally {
//     console.log('Eu sempre sou executado');
//     // sempre
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    //const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    //tratar erro
} finally {
    console.log('Tenha um bom dia.');
}