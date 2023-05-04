let valor // não irei atribuir
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString())// Erro!

//null quer dizer o endereço de memoria fica vazio
// se quiser tirar algum 'valor' use null, não undefined

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

// Resumindo então, se quiser deixar algo sem valor use null
// undefined apenas deixe o sistema dizer