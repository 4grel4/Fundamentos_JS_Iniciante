let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)// Vai dar preferência pro escopo menor, depois procurara por fora.
}
console.log('Fora =', numero)

// Let tem escopo global, escopo de função e escopo de bloco, 1 escopo a mais de Var