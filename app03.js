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

exercicio03();