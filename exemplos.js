let idade = 30;
idade = 30 + 6;
console.log('operação de adição ' + idade);

idade = 30 - 6;
console.log('operação de subtração ' + idade);

let primeiroNumero = 1023;
let segundoNumero = 23;
console.log(primeiroNumero - segundoNumero);

let precoProduto = 100.99;
let valorComTaxo = precoProduto * 2;
console.log(valorComTaxo);

let multiplicador = 4;
let multiplicando = 12;
let produto = multiplicador * multiplicando;
console.log('resultado da multiplicação é ' + produto);

let notaDoMercado = 50;
console.log('Operação de divisão: ' + notaDoMercado / 2);

let calculo = 10 % 3;
console.log('Operação de módulo: ' + calculo);

let contador = 1;

// '++' incremento
contador++;
contador++;

// '--' decremento
contador--;
contador--;

console.log(contador);

let preco = 10;
preco += 5; // preco = preco + 5
preco -= 5; // preco = preco - 5
console.log(preco);

// = é atribuição
// == é comparação de valor
// === é comparação de valor e o formato do conteúdo
// !== é comparação de valor e o formato do conteúdo
let marca = 'Apple';
let resultado = marca === 'Samsung';
console.log(resultado);

// guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = '123.445.222-45';
let cpfUsuario = '222.111.222-09';
let ehCPFBloqueado = cpfUsuario === cpfBloqueado;

console.log('O usuário está barrado ? ' + ehCPFBloqueado);

// cpf permitido

let CPFPermitido = '222.555.333-01';
let CPFDoUsuario = '222.555.333-02';

let ehCPFBloqueado2 = CPFDoUsuario !== CPFPermitido;

console.log('é um usuário inválido ? ' + ehCPFBloqueado2);

// idade
let idadeMinima = 18;
let idadeUsuario = 17;

// AND (&&) - Só dará TRUE se as duas condições forem verdadeiras

let item = 'Estrela';
let quantidadeDeMoeda = 100;

let podeEntrar = item === 'Estrela' && quantidadeDeMoeda === 100;
console.log(podeEntrar);

// OR ( || ) - Nosso boneco só pode sair se tiver sem chuva ou com guarda chuva

let tempo = 'chuva2';
let item2 = 'pá';
let podeSair = tempo !== 'chuva' || item2 === 'guarda chuva';
console.log('nosso personagem pode sair ? ' + podeSair);

// NOT (!) - nega uma afirmação

let tempo2 = 'chuva';
let horario = 8;

let resultado2 = !(tempo2 !== 'chuva' && horario > 6);
console.log('o resultado é: ' + resultado2);
