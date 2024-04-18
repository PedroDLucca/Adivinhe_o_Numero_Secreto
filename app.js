let listaDeNumerosSorteados = [];
let limiteDeNumerosSorteados = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10:');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativas';
    let mensagemParabens = `Parabéns, você acertou em ${tentativa} ${palavraTentativa}.`;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemParabens);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * limiteDeNumerosSorteados + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limiteDeNumerosSorteados) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// Desafios:

/*function helloWorld() {
    return "Olá, mundo!";
}

console.log(helloWorld());*/

/*function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
saudacao(prompt('Qual seu nome?'));*/

/*function dobroNumero(numero) {
    return numero * 2;
}
let dobro = dobroNumero(prompt('Diga um número:'));
console.log(dobro);*/

/*function numbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
let soma = numbers(3, 1, 2);
let media = soma/3;
console.log(media);*/

/*function maiorQue(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(maiorQue(5, 2));*/

/*function aoQuadrado(numero) {
    return numero*numero;
}
console.log(aoQuadrado(5));*/

/*function calculoIMC(altura, peso) {
    return (peso)/(altura*altura);
}
let imc = calculoIMC(1.90 , 88);
console.log(imc);*/

/*function fatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}
let numero = 6;
let resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}.`);*/

/*function dolarPraReal(vDolar) {
    return valor * vDolar;
}

let valor = prompt('Quanto você quer tranformar em dolar?');
let resultado = dolarPraReal(4.80);
console.log(`O valor R$${valor} em dolar é U$${resultado}`);*/

/*function retanguloArea(altura, largura) {
    let area;
    area = altura * largura;
    return area;
}
function retanguloPerimetro(altura, largura) {
    let perimetro;
    perimetro = 2*(altura+largura);
    return perimetro;
}

let altura = 4;
let largura = 7;
let resultadoArea = retanguloArea(altura, largura);
let resultadoPerimetro = retanguloPerimetro(altura, largura);
console.log(`A área deste retangulo é ${resultadoArea} e o perímetro é ${resultadoPerimetro}.`);*/

/*function circuloArea(raio) {
    area = pi * (raio*raio);
    return area;
}

function circuloPerimetro(raio) {
    perimetro = 2 * pi * raio;
    return perimetro;
}

let pi = 3.14;
let raio = 4;
let resultadoArea = circuloArea(raio);
let resultadoPerimetro = circuloPerimetro(raio);
console.log(`A área deste circulo é ${resultadoArea} e o perímetro é ${resultadoPerimetro}.`);*/

/*function tabuada(numero) {
    resultado = numero * cont; 
    return resultado;
}

let cont = 1;
let numero = prompt('Diga um número:');
let resultadoTabuada;
while(cont <= 10) {
    resultadoTabuada = tabuada(numero);
    console.log(`A tabuada do ${numero} é ${numero}x${cont}=${resultadoTabuada}.`);
    cont++;
}*/

/*let listaGenerica = [];
console.log(listaGenerica);*/

/*let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

console.log(linguagensDeProgramacao[0]);
console.log(linguagensDeProgramacao[1]);
console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);*/