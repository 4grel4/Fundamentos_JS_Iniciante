const tecnologia = new Map()
tecnologia.set('react', { framework: 'false' })
tecnologia.set('angular', { framework: 'true' })

console.log(tecnologia.react) // undefined
console.log(tecnologia.get('react').framework) // { framework: 'false' }

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
}) // function() {} Função, {} Objeto, 123 Número

console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // 2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) 