// novo recurso do ES2015

const pessoa = { // <----- Objeto
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Arnaldo',
        numero: 1000
    }
}
 
const { nome, idade} = pessoa // tirar nome e a idade do Objeto: 'pessoa'
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num} } = pessoa
console.log(ag, num) // Vai dar erro pois não tem nenhum objeto 'ag e num'

/* tem q ter cuidado quando quiser desestruturar um dado alinhado, tem q ter certeza q o caminho para o dado está livre (setado), para só o ultimo dado q pode estar null ou undefined, mas não um filho daquele dado, se não aparecerá o problema q acontece aqui:            const { conta: { ag, num} } = pessoa
              console.log(ag, num) 
*/