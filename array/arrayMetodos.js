const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // removo o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na array
console.log(pilotos)

pilotos.shift() // remove o primeiro do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no primeiro lugar da array
console.log(pilotos)

// splice pode adicionar ou remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // MASSA VAI EMBORA
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array puxando outro (pilotos)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)