//Exercicio02
function exercicio01() {
    let numero01;
    let  numero02;
    let resultado;

    numero01 = parseFloat(window.prompt("Escreva o primeiro número: "));
    numero02 = parseFloat(window.prompt("Escreva o segundp número: "));

    resultado = numero01 + numero02;
    alert(resultado);

}

//Exercício02
function exercicio02(){
    let nome;
    let sobrenome;
    let resultado;

    nome = window.prompt("Escreva seu nome: ")
    sobrenome = window.prompt("Escreva seu sobrenome: ")

    resultado = "Olá, " + nome + " " + sobrenome + "!";
    alert(resultado);
}

//Exercício03
function exercicio03(){
    let valorReal;
    let cotacao = 4.95;
    let conversao;
    let resultadoConversao;

    valorReal = window.prompt("Escreva o valor desejado: ")

    conversao = valorReal / cotacao;

    resultadoConversao = "O valor R$" + valorReal + " em dólar é $" + conversao;
    alert(resultadoConversao);

}

//Exercício04
function exercicio04(){
    let numero;
    let antecessor;
    let sucessor;
    let resposta;

    numero = parseFloat(window.prompt("Escreva um número: "))

    antecessor = numero - 1;
    sucessor = numero + 1;

    resposta = `O ANTECESSOR do número ${numero} é ${antecessor}, e o SUCESSOR é ${sucessor}`
    alert(resposta);

}

//Exercício05 
function exercicio05(){
    let areaTerreno;
    let areaM2;
    let resultado;
    let resposta;

    areaTerreno = parseFloat(window.prompt("Escreva a área do terreno e metro quadrado: "))
    areaM2 = parseFloat(window.prompt("Escreva o valor do metro quadrado: "))

    resultado = areaTerreno * areaM2
    resposta = `O valor do terreno em metro quadrado é R$${resultado}`;
    alert(resposta);

}

//Exercício06
function exercicio06(){
    let distanciaPercorrida;
    let combustivelGasto;
    let consumoMedioDoVeiculo;
    let resposta;

    distanciaPercorrida = parseFloat(window.prompt("Escreva a distancia percorrida em km: "))
    combustivelGasto = parseFloat(window.prompt("Escreva o combustível gasto em L: "))

    consumoMedioDoVeiculo = distanciaPercorrida / combustivelGasto;

    resposta = `O consumo médio deste véculo é de ${consumoMedioDoVeiculo} km/L`
    alert(resposta);

}

//Exercício Extra
function exercicioExtra(){
    let numero01;
    let numero02;
    let calcula;
    let resultado;

    numero01 = parseFloat(window.prompt("Escreva o primeiro número: "))
    calcula = window.prompt("Escreva o operador: ")
    numero02 = parseFloat(window.prompt("Escreva o segundo número: "))

    switch (calcula) {
        case "+":
            resultado = numero01 + numero02;
            alert(resultado)
            break;
        case "-":
            resultado = numero01 - numero02;
            alert(resultado)
            break;
        case "*":
            resultado = numero01 * numero02;
            alert(resultado)
            break
        case "/":
            resultado = numero01 / numero02;
            alert(resultado)
            break
        default:
            exercicioExtra();
            break;
    }

}

exercicioExtra();