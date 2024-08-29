let umaString = 'Um \"texto\"'; // barra invertida serve como escape para exibir um caractere
let umaString1 = 'Um texto';    // strings são indexadas ex: 0123456; cada caractere possui um número definido para ele, começando por 0
                                // console.log(umaString[4])
                                // console.log(umaString.concat('em', 'um', 'dia'))
                                // console.log(umaString.indexOf('texto')) = 3 (começa no indice 3) / em caso de erro = -1
                                // console.log(umaString.indexOf('o', 3)) = contagem a partir de um índce predefinido
                                // console.log(umaString.lastIndexOf('t', 3)) = contagem de trás para frente
                                // console.log(umaString.match(/[a-z]/g)) = retorna todas as letras minusculas
                                // console.log(umaString.search(/[a-z]/)) = retorna onde foi encontrado uma letra minuscula etc 
                                // console.log(umaString.replace('Um', 'Outra')) = substituição de palavras
                                // console.log(umaString.replace(/r/, '#')) = substitui apenas a primeira encontrada
                                // console.log(umaString.replace(/r/g, '#')) = substitui todas
                                // console.log(umaString.length) = conta a quantidade de caracteres
                                // console.log(umaString.slice(2, 5)) = extrair uma parte da string 
                                // console.log(umaString.slice(-3)) = começa do total (length - o valor indicado)
                                // console.log(umaString.slice(-3, -1)) = usado para retirar um caractere
                                // console.log(umaString.slice()) = substitui substring
                                // console.log(umaString.split(' ', 3)) = extrai palavras sem o caractere indicado; 3 indica quantas vezes será executado
                                // console.log(umaString.toUpperCase()) = deixa tudo maiusculo
                                // console.log(umaString.toLowerCase()) = deixa tudo minusculo
