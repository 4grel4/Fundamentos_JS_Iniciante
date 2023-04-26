const valores = [7.7, 8.9, 6.3, 9.2] // array é dinâmico (cresce e diminui)
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // length mostra quantos itens tem no array

valores.push({id: 3}, false, null, 'teste') // push adiciona na array e coloca em primeiro ?
console.log(valores)

console.log(valores.pop()) // pop tira o ultimo valor do array
delete valores[0] // tbm deleta
console.log(valores)

console.log(typeof valores)