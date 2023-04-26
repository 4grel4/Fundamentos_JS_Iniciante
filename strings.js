const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt --> Pega a letra indicada ((4)-a quarta letra da string)
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Tabela unicode ?(charCodeAt())
console.log(escola.indexOf('3')) // indexOf pega o indice do 'produto'

console.log(escola.substring(1)) // esta tbm pega a letra só que escolhe qual letra iniciar
console.log(escola.substring(0, 3)) // tipo (0, 3) começa pelo primeiro até o 3 -- sempre começa pelo 0

console.log('Escola '.concat(escola).concat("!")) // Concatena (junta tudo) tbm pode usar apenas +
console.log('Escola ' + escola + "!")
console.log(escola.replace(/\d/g,'e')) // "/\d/" isso faz substiuir o numero pelo 'e'

console.log('Ana,Maria,Pedro'.split(',')) // .split()  -- está fazendo um array
