// Arrow Function 
const soma = (a, b) => a + b // return ja embutido (implicito)

// Caso queira usar o corpo todo da função é obrigatorio usar o return =
/*const soma = (a, b) => {
   return a + b
}*/

console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais Forte')
log(null)
log(undefined)

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))