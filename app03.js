//lista 03 -> lista de repetição

function exercicio01(){
    let numeroDigitado;

    numeroDigitado = window.prompt("Escreva um numero para início do crõnometro (de 1 a 59): ")

    while((numeroDigitado > 59) || (numeroDigitado == 0)){
        alert("Digite um número válido!!")
        numeroDigitado = window.prompt("Escreva um numero: ")
    }

    for(let i = 0;i <= numeroDigitado; i++ ){
        console.log(i)
    }
}

//Desenvolva um programa que receba um número do usuário e escreva a tabuada dele.  
function exercicio02(){
    let numeroDigitado;
    let resultado;

    numeroDigitado = window.prompt("Escreva um número que deseja descobrir a tabuda:")

    for(i = 1; i <= 10; i++){
        resultado = i * numeroDigitado;
        console.log(`${numeroDigitado} X ${i} = ${resultado}`)
    }

}

//Aproveite o código dos exercícios anteriores e escreva um código que receba dois números inteiros
//e escreva todos os números pares entre eles.
function exercicio03(){
    let numero01;
    let numero02;

    numero01 = parseInt(window.prompt("Digite o primeiro número: "))
    numero02 = parseInt(window.prompt("Digite o segundo número: "))

    console.log(`Os números pares entre ${numero01} e ${numero02} são: `)

    for(i = numero01; i < numero02; i++){
        if(i % 2 == 0 && i != numero01){
            console.log(i)
        }
    }

}

//Um cliente que promove eventos e solicitou um programa que seja capaz de identificar se uma pessoa é maior de idade. 
//Pessoas com menos de 16 anos não podem entrar nos eventos. Entre 16 e 18 anos somente acompanhado pelos responsáveis. 
//Maiores de 18 podem entrar normalmente. Escreva o programa em JavaScript.
function exercicio04(){
    let idadeDigitada;

    idadeDigitada = parseInt(window.prompt("Digite sua idade: "))

    while(true){
        if(idadeDigitada < 16){
            alert(`Você tem ${idadeDigitada} anos!! \nVocê NÃO está permitido a participar do evento!!`)
        }else if((idadeDigitada == 16) || (idadeDigitada <= 18)){
            alert(`Você tem ${idadeDigitada} anos!! \nVocê está permitido a participar do evento somente acompanhado de um RESPONSÁVEL!!`)
        }else if(idadeDigitada > 18){
            alert(`Você tem ${idadeDigitada} anos!! \nVocê está permitido a participar do evento!!`)
        }else {
            alert("erro")
        }
        break;
    }

}

//Crie um algoritmo que receba login e senha e verifique as credenciais. 
//Caso algum deles estiver errado o programa deve retornar ao usuário quais das opções está errada, se é o login ou a senha. 
//O programa deve bloquear o acesso após 3 tentativas erradas.

function exercicio05(){
    let login = "joao1234"
    let senha = 1234
    let loginDigitado;
    let senhaDigitada;
    let tentativas = 1;

    loginDigitado = window.prompt("Digite seu login: ")
    senhaDigitada = parseInt(window.prompt("Digite sua senha: "))
    
    do{
        if((loginDigitado == login) && (senhaDigitada == senha)){
            alert("Acesso permitido!!")
        }else{
            tentativas++;
            if((loginDigitado != login) && (senhaDigitada == senha)){
                alert("Acesso negado!! Login incorreto.")
                loginDigitado = window.prompt("Digite seu login: ")
                senhaDigitada = parseInt(window.prompt("Digite sua senha: "))
                
            }else if((loginDigitado == login) && (senhaDigitada != senha)){
                alert("Acesso negado!! senha incorreta.")
                loginDigitado = window.prompt("Digite seu login: ")
                senhaDigitada = parseInt(window.prompt("Digite sua senha: "))                
            }else{
                alert("Acesso negado!! login e senha incorretos.")
                loginDigitado = window.prompt("Digite seu login: ")
                senhaDigitada = parseInt(window.prompt("Digite sua senha: "))                
            }
        }
    }while((tentativas < 3))

    if(tentativas == 3){
        alert("Acesso bloqueado!!")
    }

}




exercicio05();