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

exercicio02();