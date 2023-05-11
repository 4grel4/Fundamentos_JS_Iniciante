// pessoa -> 123 --> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
//pessoa = { nome: 'Ana'} <- vai dar erro

Object.freeze(pessoa) // aqui congelou :P -- Como se o objeto virasse const -- 

pessoa.nome = 'Maria' // vai ignorar pois congelou no Pedro
pessoa.end = 'Rua ABC'
delete pessoa.nome // nem deletar

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' }) //  assim ja cria uma const const 
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
