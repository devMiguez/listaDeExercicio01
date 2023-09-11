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

exercicio02();