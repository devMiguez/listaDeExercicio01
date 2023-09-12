//Exercícios Desvio de Condicionais (if/else/switch)

//Escreva um programa que recebe um número digitado pelo usuário e responda se o número inserido é par ou ímpar ou 0. 
function exercicio01(){
    let numeroDigitado;
    numeroDigitado = window.prompt("Digite o número para saber se é par ou ímpar: ")

    if((numeroDigitado % 2) == 0){
        console.log(`O número ${numeroDigitado} é par!!`)
    }else{
        console.log(`O número ${numeroDigitado} é ímpar!!`)
    }
}

//Desenvolva um algoritmo que seja capaz de receber dois números digitados pelo usuário e diga qual deles é maior.
function exercicio02(){
    let numero01;
    let numero02;

    numero01 = parseInt(window.prompt("Escreva o primeiro número: "));
    numero02 = parseInt(window.prompt("Escreva o segundo número: "));
    console.log(`O primeiro número é ${numero01}`);
    console.log(`O segundo número é ${numero02}`);

    if(numero01 > numero02) {
        console.log(`O número ${numero01} é maior que o número ${numero02}`)
    }else {
        console.log(`O número ${numero01} é menor que o número ${numero02}`)
    }

}

//Um banco contratou você para que escreva um programa que irá ser utilizado pelo usuário em um tablet.
//O programa irá fazer 3 perguntas e encaminhar o cliente para 2 filas. A fila comum e a fila preferencial. 
//Se o cliente atender a uma das condições a seguir ele deve ser encaminhado para a fila preferencial. 
//As condições são: Ter mais de 65 anos, se deficiente ou gestante. 
function exercicio03(){
    let idade;
    let deficiente;
    let gestante;

    idade = window.prompt("Insira sua idade: ")
    deficiente = window.prompt("Você é deficiente? (Responda com 'sim' ou 'nao')")
    deficiente = deficiente.toLowerCase();
    gestante = window.prompt("Você é gestante ? (Responda com 'sim' ou 'nao')")
    gestante = gestante.toLowerCase();

    console.log(`Sua idade é: ${idade}`)
    console.log(`Você é deficiente: ${deficiente}`)
    console.log(`Você é gestante: ${gestante}`)

    if((idade >= 65) || (deficiente == "sim") || (gestante == "sim")){
        console.log("Você atende as condições necessárias, vá para a fila PREFERÊNCIAL!!!")
    }else{
        console.log("Você não atende as condições necessárias, vá para a fila COMUM!!!")
    }


}


exercicio02();