// operador ... rest(juntar) e ... spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // operador spread (espalhar)
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }



// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] // operador spread (espalhar)
console.log(grupoFinal) // ['Maria', 'Rafaela', 'João', 'Pedro', 'Gloria']



// operador rest (juntar) com array
const funcionario2 = ['Maria', 'Rafaela', 'João', 'Pedro', 'Gloria']
const [maria, rafaela, ...demais] = funcionario2 // operador rest (juntar)
console.log(maria, rafaela) // Maria Rafaela
console.log(demais) // [ 'João', 'Pedro', 'Gloria' ]


// operador rest (juntar) com objeto
const funcionario3 = { nome: 'Maria', salario: 12348.99, ativo: true }
const { nome, salario, ...resto } = funcionario3 // operador rest (juntar)
console.log(nome, salario) // Maria 12348.99
console.log(resto) // { ativo: true }