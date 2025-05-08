// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes) // [ 'Olá ', ' você tem ', ' anos' ]
    console.log(valores) // [ 29 ]
    return 'Outra string'
}

const aluno = 'Gustavo'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`) // Gustavo está Aprovado

