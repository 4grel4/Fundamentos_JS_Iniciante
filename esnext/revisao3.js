// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // [1, 2, 3]
console.log(Object.entries(obj)) // [1, 2, 3]

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }   
}

console.log(pessoa.nome, pessoa.ola())

// Class (ES6)
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())

