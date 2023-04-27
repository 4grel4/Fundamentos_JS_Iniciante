console.log(typeof Object)
console.log(typeof new Object) // Objeto criado apartir de uma função

const Cliente = function() {}
console.log(typeof Cliente)                                 // Conceito Função Construtora.
console.log(typeof new Cliente)
    
class Produto {} // ECMA 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) // class é um detalhe de uma sintaxe porem mesmo assim é uma função, pois uma classe q é criado no JS, internamente ela é uma função
