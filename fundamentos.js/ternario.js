const resultado = nota =>  nota >= 7 ? 'Aprovado' : 'Reprovado'
/* Tambem poderia ser dessa forma (para não estranhar de primeira) : 
const resultado = nota => {
    return  nota >= 7 ? 'Aprovado' : 'Reprovado'
    }*/

console.log(resultado(7.1))
console.log(resultado(6.7))

