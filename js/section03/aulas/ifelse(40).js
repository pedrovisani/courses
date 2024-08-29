const hora = 23;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if(hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Olá');
}

/*
if pode ser usado sozinho
sempre deve existir um if antes de um else/else if
pode haver vários else if na checagem
só pode haver um else na checagem
pode haver apenas if e else
*/