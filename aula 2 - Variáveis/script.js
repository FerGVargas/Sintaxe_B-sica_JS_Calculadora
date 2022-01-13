// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroqualquer = 1;
console.log(typeof(numeroqualquer));

//string
var nome ='diana';
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao));

//como declarar
var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

let variavel2 = 'diana';
variavel2 = 'martine';
console.log(variavel2);

const constante = 'diana';
constante = 'martine';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal(); 

//atribuição
var atribuicao ='diana';

//comparacao
var comparacao = '0' == 0;

console.log(comparacao);

//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); 

//adicao
var adicao = 1 + 1;
console.log(adicao); 

//subtracao
var subitracao = 2 - 1;
console.log(subitracao); 

//mutiplicação
var mutiplicacao = 2 * 3;
console.log(mutiplicacao); 

//divisao real
var divisaoReal = 6 / 2;
console.log (divisaoReal); 

// divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira); 

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao); 

// maior que 
var menorQue = 5 > 2;
console.log(menorQue); 

// menor
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgaul = 5 > 2;
console.log(maiorOuIgaul);

//menor ou igual 
var menorOuIgual = 5 < 2;
console.log(menorQue); 

var e = true && false;
console.log(e); 

var ou = true || false;
console.log(ou); 

var nao = ! true;
console.log(nao); 
