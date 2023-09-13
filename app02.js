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

//Um cliente que promove eventos e solicitou um programa que seja capaz de identificar se uma pessoa é maior de idade. 
//Pessoas com menos de 16 anos não podem entrar nos eventos. Entre 16 e 18 anos somente acompanhado pelos responsáveis. 
//Maiores de 18 podem entrar normalmente. Escreva o programa em JavaScript.
function exercicio04(){
    let idade;

    idade = parseInt(window.prompt("Esreva sua idade: "))
    console.log(`Sua idade é: ${idade}`)

    if(idade < 16){
        console.log("Você não está autorizado a participar do evento!!")
    }else if((idade >= 16) && (idade <= 18) ){
        console.log("Você pode participar do evento somento acompanhado de um RESPONSÁVEL!!")
    }else if(idade > 18){
        console.log("Você está autorizado a participar do evento!!")
    }

}

//Crie um algoritmo que receba login e senha e verifique as credenciais.
//Caso algum deles estiver errado o programa deve retornar ao usuário quais das opções está errada, se é o login ou a senha. 
function exercicio05(){
    let login = "joao13";
    let senha = 1234;
    let loginDigitado;
    let senhaDigitada;

    loginDigitado = window.prompt("Escreva seu login: ")
    console.log(`Login: ${loginDigitado}`)
    senhaDigitada = parseInt(window.prompt("Digite sua senha:"))
    console.log(`Senha: ${senhaDigitada}`)

    if((loginDigitado == login) && (senhaDigitada == senha)){
        console.log("Acesso autorizado!!")
    }else if((loginDigitado == login) && (senhaDigitada != senha)){
        console.log("Acesso negado!! (SENHA INCORRETA)")
        exercicio05();
    }else if((loginDigitado != login) && (senhaDigitada == senha)){
        console.log("Acesso negado!! (LOGIN INCORRETO)")
        exercicio05();
    }else if((loginDigitado != login) && (senhaDigitada != senha)){
        console.log("Acesso negado!! (LOGIN E SENHA INCORRETAS)")
        exercicio05();
    }else {
        console.log("erro")
    }

}

//Crie um joguinho de perguntas e respostas múltipla escolha. O programa deverá fazer 3 perguntas (Uma por vez). 
//Se o usuário acertar as 3 perguntas ele ganha o jogo. Se ele errar 3 vezes ele perde o jogo. 
function exercicio06(){
    let pergunta01;
    let pergunta02;
    let pergunta03;

    pergunta01 = window.prompt("Quantas libertadores o flamengo tem? \n Digite (1): O flamengo tem 40 libertadores \n Digite (2): o flamengo tem 3 libertadores \n Digite (3): O flamengo tem 5 libertadores \n Digite (4): Nenhuma das anteriores")
    console.log(`Sua resposta foi: ${pergunta01}`)
    

}

exercicio06();