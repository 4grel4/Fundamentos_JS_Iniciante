console.log('01)', '1' == 1) // == é comparação "iguais"
console.log('02)', '1' === 1) // === é estritamente igual
console.log('03)', '3' != 1) // != é diferente
console.log('04)', '3' != 1) // !== é estritamente diferente

console.log('05)', 3 < 2) // < é menor
console.log('06)', 3 > 2) // > é maior
console.log('07)', 3 <= 2 ) // é menor ou igual
console.log('08)', 3>= 2 ) // >= é maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// use === é melhor para não misturar tipos, pois apenas == ignora o tipo do dado