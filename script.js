let num1 = 0.7;
let num2 = 0.1;

//console.log(num1.toString() + num2); // concatenacao 
//num1 = num1.toString(); // mudamos o valor de int para string
//console.log(typeof(num1));
//console.log(num1.toString(2)); // representacao binaria usando o toString()
//console.log(num1.toFixed(2)) // o toFixed() diminui as casas decimais de um número flutuante
//console.log(Number.isInteger(num1)); // o método isInterager() mostra se um número é inteiro
//console.log(Number.isNaN(num1 + num2)); // esse método mostra se existe algo invalido em uma conta

// inprecisao em contas com numero flutuantes

// O JS utiliza um modelo de conta chamado IEEE 754-2008
//console.log(num1 + num2) //Podemos ver que o resultado é 7.999999999999999 | Podemos consertar isso utilizando uma funcao chamada toFixed()
num1 += num2;
/*Com isso ele concertará o erro, porém ele irá continuar sendo um float e ao um int
Podemos acrescentar um parseFloat() ai sim ele irá calcular o valor correto, sem nenhum erro
*/
num1 = Number(num1.toFixed(2));
console.log(Number.isInteger(num1));


