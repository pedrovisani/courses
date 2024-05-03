/*const tresHoras = 60*60*3*1000; // java script trabalha com milisegundo
const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());*/

/*const data = new Date(2019, 3, 20, 15, 14, 27, 500); // 20/April/2019 15:14:27:500
console.log(data.toString());*/

/*const data = new Date('2019-04-20 20:20:59.100'); // 20/April/2019 15:14:27:500
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());*/

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());
   
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

