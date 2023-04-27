// Função sem retorno, Função é um bloco de código nomiado, recebendo dados e passos, para o final receber algum valor, existem varias possibilidades de função.

function imprimirSoma(a, b) {
console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)// vai pegar apenas os 2 primeiros e ignorar o resto, por ter uma tipagem fraca, outras linguagens daria error. 
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log (soma(2, 3))
console.log(soma())
